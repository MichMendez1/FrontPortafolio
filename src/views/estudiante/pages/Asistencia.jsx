import "./asistencia.scss"
import Sidebar from '../components/sidebar/Sidebar';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';

const Notas = () => {
    

    const data = {
        columns: [
            {
                label: 'Mes',
                field: 'mes',
                width: 120,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Mes',
                },
            },
            {
                label: 'Fecha',
                field: 'fecha',
                width: 290,
            },
            {
                label: 'Lunes',
                field: 'lun',
                width: 150,
            },
            {
                label: 'Martes',
                field: 'mar',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Miércoles',
                field: 'mie',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Jueves',
                field: 'juev',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Viernes',
                field: 'vie',
                sort: 'disabled',
                width: 150,
            },

        ],
        rows: [
            {
                mes: 'Marzo',
                fecha: 'Lun 04/03/2024 - Vie 08/03/2024',
                lun: 'Sí',
                mar: 'Sí',
                mie: 'Sí',
                juev: 'Sí',
                vie: 'Sí',
                
            },
            {
                mes: 'Marzo',
                fecha: 'Lun 11/03/2024 - Vie 15/03/2024',
                lun: 'Sí',
                mar: 'Sí',
                mie: 'No',
                juev: 'Sí',
                vie: 'Sí',
                
            },
            {
                mes: 'Marzo',
                fecha: 'Lun 18/03/2024 - Vie 22/03/2024',
                lun: 'No',
                mar: 'No',
                mie: 'No',
                juev: 'No',
                vie: 'No',
                
            },
            {
                mes: 'Marzo',
                fecha: 'Lun 25/03/2024 - Vie 29/03/2024',
                lun: 'Sí',
                mar: 'No',
                mie: 'No',
                juev: 'No',
                vie: 'Sí',
                
            },
            {
                mes: 'Abril',
                fecha: 'Lun 01/04/2024 - Vie 05/04/2024',
                lun: 'Sí',
                mar: 'No',
                mie: 'No',
                juev: 'No',
                vie: 'Sí',
                
            },
            {
                mes: 'Abril',
                fecha: 'Lun 08/04/2024 - Vie 12/04/2024',
                lun: 'Sí',
                mar: 'No',
                mie: 'No',
                juev: 'No',
                vie: 'Sí',
                
            },
            {
                mes: 'Abril',
                fecha: 'Lun 15/04/2024 - Vie 19/04/2024',
                lun: 'Sí',
                mar: 'No',
                mie: 'No',
                juev: 'No',
                vie: 'Sí',
                
            },
            {
                mes: 'Abril',
                fecha: 'Lun 22/04/2024 - Vie 26/04/2024',
                lun: 'Sí',
                mar: 'No',
                mie: 'No',
                juev: 'No',
                vie: 'Sí',
                
            },
            {
                mes: 'Abril - Mayo',
                fecha: 'Lun 29/04/2024 - Vie 03/05/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Mayo',
                fecha: 'Lun 06/05/2024 - Vie 10/06/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Mayo',
                fecha: 'Lun 13/05/2024 - Vie 17/05/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Mayo',
                fecha: 'Lun 20/05/2024 - Vie 24/05/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Mayo',
                fecha: 'Lun 27/05/2024 - Vie 31/05/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Junio',
                fecha: 'Lun 03/05/2024 - Vie 07/05/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Junio',
                fecha: 'Lun 10/05/2024 - Vie 14/05/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Junio',
                fecha: 'Lun 17/05/2024 - Vie 21/05/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Junio',
                fecha: 'Lun 24/05/2024 - Vie 28/05/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Julio',
                fecha: 'Lun 01/06/2024 - Vie 05/06/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Julio',
                fecha: 'Lun 08/06/2024 - Vie 12/06/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Julio',
                fecha: 'Lun 15/06/2024 - Vie 19/06/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Julio',
                fecha: 'Lun 22/06/2024 - Vie 26/06/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Julio - Agosto' ,
                fecha: 'Lun 29/06/2024 - Vie 02/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Agosto' ,
                fecha: 'Lun 05/07/2024 - Vie 09/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Agosto' ,
                fecha: 'Lun 12/07/2024 - Vie 16/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Agosto' ,
                fecha: 'Lun 19/07/2024 - Vie 23/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',
                
            },
            {
                mes: 'Agosto' ,
                fecha: 'Lun 26/07/2024 - Vie 30/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',  
            },
            {
                mes: 'Septiembre' ,
                fecha: 'Lun 02/07/2024 - Vie 06/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',  
            },
            {
                mes: 'Septiembre' ,
                fecha: 'Lun 09/07/2024 - Vie 13/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',  
            },
            {
                mes: 'Septiembre' ,
                fecha: 'Lun 16/07/2024 - Vie 20/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',  
            },
            {
                mes: 'Septiembre' ,
                fecha: 'Lun 23/07/2024 - Vie 27/07/2024',
                lun: '',
                mar: '',
                mie: '',
                juev: '',
                vie: '',  
            },

        ],
    };

    return (
        <div className="asistencia-container">
            <Sidebar />
            <div className="content">
                <CDBContainer>
                    <CDBCard>
                        <CDBCardBody>
                            <CDBDataTable
                                striped
                                bordered
                                hover
                                scrollX
                                scrollY
                                maxHeight='700px'
                                data={data}
                                materialSearch
                                fullPagination
                            />
                        </CDBCardBody>
                    </CDBCard>
                </CDBContainer>
            </div>
        </div>
    );
};

export default Notas;

