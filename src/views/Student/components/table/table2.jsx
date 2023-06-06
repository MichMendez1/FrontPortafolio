import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import "./table.scss"

const List2 = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 300 },
        { field: 'fecha', headerName: 'Fecha', width: 200 },
        { field: 'asiste', headerName: 'Asistencia', width: 200 },
        {
            field: 'mes',
            headerName: 'Mes',
            type: 'string',
            width: 200,
        },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.row.fecha || ''} ${params.row.asiste || ''}`,
        // },
    ];

    const rows = [
        { id: 1, asiste: 'Si', fecha: 'Lunes 05', mes: "Junio" },
        { id: 2, asiste: 'Si', fecha: 'Martes 06', mes: "Junio" },
        { id: 3, asiste: 'Si', fecha: 'Miércoles 07', mes: "Junio" },
        { id: 4, asiste: 'No', fecha: 'Jueves 08', mes: "Junio" },
        { id: 5, asiste: 'Si', fecha: 'Viernes 09', mes: "Junio" },
        { id: 6, asiste: 'Si', fecha: 'Lunes 12', mes: "Junio" },
        { id: 7, asiste: 'No', fecha: 'Martes 13', mes: "Junio" },
        { id: 8, asiste: 'Si', fecha: 'Miércoles 14', mes: "Junio" },
        { id: 9, asiste: 'Si', fecha: 'Jueves 15', mes: "Junio" },
        { id: 10, asiste: 'No', fecha: 'Viernes 16', mes: "Junio" },
        { id: 11, asiste: 'Si', fecha: 'Lunes 19', mes: "Junio" },
        { id: 12, asiste: 'Si', fecha: 'Martes 20', mes: "Junio" },
        { id: 13, asiste: 'Si', fecha: 'Miércoles 21', mes: "Junio" },
        { id: 14, asiste: 'Si', fecha: 'Jueves 22', mes: "Junio" },
        { id: 15, asiste: 'No', fecha: 'Viernes 23', mes: "Junio" },
        { id: 16, asiste: 'Si', fecha: 'Lunes 26', mes: "Junio" },
        { id: 17, asiste: 'Si', fecha: 'Martes 27', mes: "Junio" },
        { id: 18, asiste: 'No', fecha: 'Miércoles 28', mes: "Junio" },
        { id: 19, asiste: 'Si', fecha: 'Jueves 29', mes: "Junio" },
        { id: 20, asiste: 'Si', fecha: 'Viernes 30', mes: "Junio" },
        { id: 21, asiste: 'No', fecha: 'Lunes 03', mes: "Julio" },
        { id: 22, asiste: 'Si', fecha: 'Martes 04', mes: "Junio" },
        { id: 23, asiste: 'Si', fecha: 'Miércoles 05', mes: "Junio" },
        { id: 24, asiste: 'Si', fecha: 'Jueves 06', mes: "Julio" },
        { id: 25, asiste: 'Si', fecha: 'Viernes 07', mes: "Julio" },
        { id: 26, asiste: 'Si', fecha: 'Lunes 10', mes: "Julio" },


    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);
    const [pageSize, setPageSize] = useState(5);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filteredData = rows.filter((row) => {
            const fecha = row.fecha ? row.fecha.toLowerCase() : '';
            const asiste = row.asiste ? row.asiste.toLowerCase() : '';
            const mes = row.mes ? row.mes.toLowerCase() : '';
            return (
                fecha.includes(value) ||
                asiste.includes(value) ||
                mes.includes(value)

            );
        });

        setFilteredRows(filteredData);
    };
    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
    };



    return (
        <div className='table2'>
            <TextField className='textField'
                value={searchTerm}
                onChange={handleSearch}
                placeholder=""
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <SearchIcon
                            style={{
                                cursor: 'pointer',
                            }}
                        />
                    ),
                }}
            />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeChange={handlePageSizeChange}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default List2;
