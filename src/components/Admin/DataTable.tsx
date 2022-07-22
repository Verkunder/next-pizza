import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { useState } from 'react';

const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id));
    };

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: params => {
                return (
                    <div className="cellAction">
                        <a style={{ textDecoration: 'none' }}>
                            <div className="viewButton">View</div>
                        </a>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">Пользователи</div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
