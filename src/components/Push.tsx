import React, { FC } from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle, Stack } from '@mui/material';

interface IPush {
    type: string;
    message: string;
}

const Push: FC<IPush> = ({ type, message }) => (
    <Stack sx={{ width: '30%', position: 'absolute', right: '10px', top: '100px' }} spacing={2}>
        <Alert severity="success">
            <AlertTitle>{type}</AlertTitle>
            {message}
        </Alert>
    </Stack>
);

export default Push;
