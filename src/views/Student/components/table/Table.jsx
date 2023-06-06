
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [

    {
      asignatura: "Artes visuales",
      nota1: "0",
      nota2:"0",
      nota3:"0",
      promedio: "0",

    },

    {
      asignatura: "Ciencias naturales",
      nota1: "0",
      nota2:"0",
      nota3:"0",
      promedio: "0",

    },
    {
      asignatura: "Educación física",
      nota1: "0",
      nota2:"0",
      nota3:"0",
      promedio: "0",

    },
    {
      asignatura: "Historia, geografía y ciencias sociales",
      nota1: "0",
      nota2:"0",
      nota3:"0",
      promedio: "0",

    },

    {
      asignatura: "Inglés",
      nota1: "0",
      nota2:"0",
      nota3:"0",
      promedio: "0",

    },

    {
      asignatura: "Lenguaje y comunicación / Lengua y literatura",
      nota1: "0",
      nota2:"0",
      nota3:"0",
      promedio: "0",

    },
    {
      asignatura: "Matemáticas",
      nota1: "0",
      nota2:"0",
      nota3:"0",
      promedio: "0",

    },
    {
      asignatura: "Tecnología",
      nota1: "0",
      nota2:"0",
      nota3:"0",
      promedio: "0",

    },


  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Asignatura</TableCell>
            <TableCell className="tableCell">Nota 1</TableCell>
            <TableCell className="tableCell">Nota 2</TableCell>
            <TableCell className="tableCell">Nota 3</TableCell>
            <TableCell className="tableCell">Promedio Final</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.asignatura}>
              <TableCell className="tableCell" >{row.asignatura}</TableCell>
              <TableCell className="tableCell" >{row.nota1}</TableCell>
              <TableCell className="tableCell" >{row.nota2}</TableCell>
              <TableCell className="tableCell" >{row.nota3}</TableCell>
              <TableCell className="tableCell">{row.promedio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default List
