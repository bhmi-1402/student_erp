import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Strip from '../../components/common/Strip';
import {Select} from 'antd'
function createData(subjectCode , subject , totalMarks , obtained , percentage) {
    return { subjectCode , subject , totalMarks , obtained , percentage };
  }

  const rows = [
        createData("KCS603","Computer Netwoks","24","20","83%"),
        createData("KCS601","Software Engneering","28","24","85%"),
        createData("KNC601","C.O.I.","7","5","71%"),
        createData("KOE068","Software Project Management","17","14","82%"),
        createData("KIT601","BlockChain Architecture","18","15","83%"),
        createData("KIT061","Data Analytics","20","16","80%"),
  ];

const StudentMarks = ()=>{
    return <div className='p-2'>
    <Strip></Strip>
    <div className="flex p-4 justify-around items-center gap-2 font-bold font-bhoomi">
        <p>Student Attendence Summary</p>
        <p>
          Select Semester
          <Select
            defaultValue="5"
            style={{ width: 120 , margin:"10px"}}
            onChange={() => {}}
            options={[
              { value: "1", label: "Semester I " },
              { value: "2", label: "Semester II " },
              { value: "3", label: "Semester III " },
              { value: "4", label: "Semester IV " },
              { value: "5", label: "Semester V " },
            ]}
          />
        </p>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-sky-800 text-white-600' >
          <TableRow>
            <TableCell sx={{color:"white"}}>Subject Code</TableCell>
            <TableCell align="left" sx={{color:"white"}}>Subject</TableCell>
            <TableCell align="right" sx={{color:"white"}}>Total Marks</TableCell>
            <TableCell align="right" sx={{color:"white"}}>Obtained</TableCell>
            <TableCell align="right" sx={{color:"white"}}>Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.subjectCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className={row.percentage < "33%" ? "bg-red-200" : ""}
            >
              <TableCell component="th" scope="row">
                {row.subjectCode}
              </TableCell>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="right">{row.totalMarks}</TableCell>
              <TableCell align="right">{row.obtained}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>;
}

export default StudentMarks; 






