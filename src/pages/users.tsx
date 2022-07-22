import React, { useState } from 'react';
import Head from 'next/head';
import Sidebar from '@/components/Admin/Sidebar';
import Navbar from '@/components/Admin/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Checkbox, TextareaAutosize, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Users = () => {
    const [file, setFile] = useState('');
    const [age, setAge] = useState('');

    const [value, setValue] = useState<Date | null>(new Date());
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleChangeDara = (newValue: Date | null) => {
        setValue(newValue);
    };
    return (
        <div>
            <Head>
                <title>Pizza</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="home">
                <Sidebar />
                <div className="home__container">
                    <Navbar />
                    <div className={'featured'} style={{ margin: '50px 450px', width: '900px' }}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                Новый пользователь
                            </FormLabel>
                            <div style={{ padding: '15px 0' }}>
                                <TextField id="standard-basic" label="Имя" variant="standard" />
                            </div>
                            <div style={{ padding: '15px 0' }}>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Согласие на обработку персональных данных"
                                />
                            </div>
                            <div style={{ padding: '15px 0' }}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Оставьте комментарий"
                                    style={{ width: 200 }}
                                />
                            </div>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Женский"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Мужской"
                                />
                            </RadioGroup>
                            <div style={{ marginTop: '15px' }}></div>
                            <InputLabel
                                style={{ position: 'relative', top: '10px' }}
                                id="demo-simple-select-label"
                            >
                                Возраст
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                            <div style={{ marginTop: '25px' }}></div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Дата регистрации"
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChangeDara}
                                    renderInput={params => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
