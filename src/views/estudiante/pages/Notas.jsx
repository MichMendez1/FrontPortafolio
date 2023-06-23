import "./notas.scss"
import Sidebar from '../components/sidebar/Sidebar';
import Table from 'react-bootstrap/Table';

const Notas = () => {

    return (
        <div className="notas-container">
            <Sidebar />
            <div className="table-container">
                <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>Asignatura</th>
                            <th>Nota 1</th>
                            <th>Nota 2</th>
                            <th>Nota 3</th>
                            <th>Promedio Final</th>           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Artes Visuales</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Ciencias Naturales</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Educación Física</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Historia, Geografía y Ciencias Sociales</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Inglés</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Lenguaje y comunicación / Lengua y literatura</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Matemáticas</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Tecnología	</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Notas;

