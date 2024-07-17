import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Strip from "../../components/common/Strip";
import { Select } from "antd";
import axios from "axios";
import { useState,useEffect} from "react";
import path from "../../path";
import { useSelector } from "react-redux";

function createData(subjectCode, subject, totalClass, marked, percentage) {
  return { subjectCode, subject, totalClass, marked, percentage };
}

const rows = [
  createData("KCS603", "Computer Netwoks", "24", "20", "83%"),
  createData("KCS601", "Software Engneering", "28", "24", "85%"),
  createData("KNC601", "C.O.I.", "7", "5", "71%"),
  createData("KOE068", "Software Project Management", "17", "14", "82%"),
  createData("KIT601", "BlockChain Architecture", "18", "15", "83%"),
  createData("KIT061", "Data Analytics", "20", "16", "80%"),
];

const Present = () => {
  const [currentSemeseter,setCurrentSemester] = useState(1);
  const user = useSelector(state => state.user.data);

  const fetchAttendance = async ()=>{
    try{
      const response = await axios.post(path+`student/attendance`,{
        id : user._id,
        sem : currentSemeseter
      })
      console.log(response.data);
    }catch(Err){
      console.log(Err)
    }
  }

  useEffect(()=>{
    fetchAttendance();
  },[currentSemeseter]);

  return (
    <div className="p-2">
      <Strip></Strip>
      <div className="flex p-4 justify-around items-center gap-2 font-bold font-bhoomi">
        <p>Student Attendence Summary</p>
        <p>
          Select Semester
          <Select
            defaultValue="5"
            style={{ width: 120 , margin:"10px"}}
            onSelect={e=>setCurrentSemester(e)}
            options={[
              { value: 1, label: "Semester I " },
              { value: 2, label: "Semester II " },
              { value: 3, label: "Semester III " },
              { value: 4, label: "Semester IV " },
              { value: 5, label: "Semester V " },
              { value: 6, label: "Semester VI " },
              { value: 7, label: "Semester VII " },
              { value: 8, label: "Semester VIII " },
            ]}
          />
        </p>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-sky-800 text-white-600">
            <TableRow>
              <TableCell sx={{ color: "white" }}>Subject Code</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Subject
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Total Classes
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Attendend
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Attendence Percentage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.subjectCode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
    </div>
  );
};

export default Present;
