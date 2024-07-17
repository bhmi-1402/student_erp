import { useState, useEffect} from "react";
import path from "../../path";
import axios from "axios";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
} from "@mui/material";
import "./../AdminForm.css";

const AdminForm = () => {
  const [load, setLoad] = useState(false);
  const [classSelected,setClassSelected] = useState([]);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    RollNumber: "",
    class: "",
    currentSemester: "",
    Gender: "",
    PhoneNumber:+91,
    Address : "",
    DateOfBirth:""
  });

  
  const getClasses = async(req,res)=>{
    try{
      const response = await axios.get(path+'admin/class');
      console.log(response);
      setClassSelected(response.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getClasses();
  },[]);

  const handleSubmit = async () => {
    setLoad(true);
    try {
      const res = await axios.post(path + "admin/addToStudents", {
        FullName: data.name,
        Email: data.email,
        Password: data.password,
        RollNumber: data.RollNumber,
        CurrentSemester: data.currentSemester,
        Branch: data.class,
        Address: data.Address,
        Gender: data.Gender,
        Branch: "NA",
        PhoneNumber: data.PhoneNumber,
        DateOfBirth: new Date(data.DateOfBirth),
      });
      if(res.data.error){
        alert("Some Error Occured At Backend");
      }
    } catch (err) {
      alert("Some Error Occured");
    }
    setLoad(false);
  };

  return (
    <>
      <div className="adminform-title">Add Student Data to Database</div>
      {load && <LinearProgress></LinearProgress>}
      <div className="adminform">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={data.name}
          onChange={(e) =>
            setData({ ...data, name: e.target.value.toLowerCase() })
          }
        />
        <TextField
          id="outlined-basic"
          label="Roll Number"
          variant="outlined"
          value={data.RollNumber}
          onChange={(e) =>
            setData({ ...data, RollNumber: e.target.value.toLowerCase() })
          }
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value.toLowerCase() })
          }
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        {/* <TextField id="outlined-basic" label="Class" variant="outlined" value={data.class} onChange={e=>setData({...data,class:e.target.value.toLowerCase()})}/> */}
        <FormControl>
          <InputLabel>Class</InputLabel>
          <Select
            label="Branch"
            value={data.class}
            onChange={(e) =>
              setData({ ...data, class: e.target.value })
            }
          >
            {
                classSelected?.map((branch)=>{
                    return <MenuItem value={branch}>{
                      "SEM " + branch.Semester + " " + branch.Name
                    }</MenuItem>
                })
            }
          </Select>
        </FormControl>
        <div></div>
       
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Select
            value={data.Gender}
            label="Gender"
            placeholder="Gender"
            onChange={(e) => setData({ ...data, Gender: e.target.value })}
            >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </FormControl>
        
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="Number" value={data.PhoneNumber} onChange={e=>setData({...data,PhoneNumber:e.target.value})}/>
        <TextField id="outlined-basic" label="Address" variant="outlined" value={data.Address} onChange={e=>setData({...data,Address:e.target.value})}/>
        <TextField type="date" label='Date of Birth' value={data.DateOfBirth} onChange={e=>setData({...data,DateOfBirth:e.target.value})}></TextField>

        <div>

          <Button variant="contained" disabled={load} onClick={handleSubmit}>
            Add Student
          </Button>

        </div>
      </div>
    </>
  );
};
export default AdminForm;
