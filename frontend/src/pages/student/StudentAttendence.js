import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(subjectCode , subject , totalClass , marked , percentage) {
    return { subjectCode , subject , totalClass , marked , percentage };
  }
  
  const rows = [
        createData("KCS603","Computer Netwoks","24","20","83%"),
        createData("KCS601","Software Engneering","28","24","85%"),
        createData("KNC601","C.O.I.","7","5","71%"),
        createData("KOE068","Software Project Management","17","14","82%"),
        createData("KIT601","BlockChain Architecture","18","15","83%"),
        createData("KIT061","Data Analytics","20","16","80%"),

  ];

const Present = ()=>{
    return <div className='p-2'>
    <div className='flex p-4 font-bold font-bhoomi'>
        Student Attendence Summary
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-gray-400 color-white'>
          <TableRow>
            <TableCell>Subject Code</TableCell>
            <TableCell align="left">Subject</TableCell>
            <TableCell align="right">Total Classes</TableCell>
            <TableCell align="right">Attendend</TableCell>
            <TableCell align="right">Attendence Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.subjectCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className={row.percentage < "75%" ? "bg-red-200" : ""}
            >
              <TableCell component="th" scope="row">
                {row.subjectCode}
              </TableCell>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="right">{row.totalClass}</TableCell>
              <TableCell align="right">{row.marked}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>;
}

export default Present; 






