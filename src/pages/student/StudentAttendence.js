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

const calcPercent = (numerator,denominator)=>{
  let percentage = numerator*100 / denominator;
  percentage = percentage.toFixed(1);
  return percentage
}

const Present = () => {
  
  const [currentSemeseter,setCurrentSemester] = useState(1);
  const user = useSelector(state => state.user.data);
  const [data,setData] = useState([]);

  const fetchAttendance = async ()=>{
    try{
      const response = await axios.post(path+`student/attendance`,{
        id : user._id,
        sem : currentSemeseter
      })
      console.log(response.data);
      if(response.data){
        setData(response.data)
      }
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
            {data.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={ calcPercent(row.Presents,row.TotalClasses) < 70 ? "bg-red-200" : ""}
              >
                <TableCell component="th" scope="row">
                  {row.SubjectAlias}
                </TableCell>
                <TableCell align="left">{row.SubjectName}</TableCell>
                <TableCell align="right">{row.TotalClasses}</TableCell>
                <TableCell align="right">{row.Presents}</TableCell>
                <TableCell align="right">{calcPercent(row.Presents,row.TotalClasses) + " %"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Present;
