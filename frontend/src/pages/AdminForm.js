import { useState } from "react";
import path from "../path";
import axios from "axios";
import { Password } from "@mui/icons-material";
import { Button, TextField,Select,MenuItem, FormControl, InputLabel, LinearProgress} from "@mui/material";
import './AdminForm.css';

const AdminForm = ()=>{
    const [load,setLoad] = useState(false);
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
        rollNumber:"",
        class:"",
        currentSemester:"",
        gender:"",
        subject1:"",
        subject2:"",
        subject3:"",
        subject4:"",
        subject5:""
    });

    const handleSubmit = async ()=>{
        setLoad(true);
        try{
            const res = await axios.post(path+'admin/addToStudents',data);
            if(res.data.error){
                alert("Some Error Occured At Backend");
            }
        }catch(err){
            alert("Some Error Occured");
        }
        setLoad(false);
    }
return <>
<div className="adminform-title">Add Student Data to Database</div>
{
    load && <LinearProgress></LinearProgress>
}
<div className="adminform">
<TextField id="outlined-basic" label="Name" variant="outlined" value={data.name} onChange={e=>setData({...data,name:e.target.value.toLowerCase()})}/>
<TextField id="outlined-basic" label="Roll Number" variant="outlined" value={data.rollNumber} onChange={e=>setData({...data,rollNumber:e.target.value.toLowerCase()})} />
<TextField id="outlined-basic" label="Email" variant="outlined" value={data.email} onChange={e=>setData({...data,email:e.target.value.toLowerCase()})}/>
<TextField id="outlined-basic" label="Password" variant="outlined" value={data.password} onChange={e=>setData({...data,password:e.target.value})}/>
{/* <TextField id="outlined-basic" label="Class" variant="outlined" value={data.class} onChange={e=>setData({...data,class:e.target.value.toLowerCase()})}/> */}
<FormControl>
<InputLabel>Class</InputLabel>
<Select
    label="Branch"
    value={data.class} onChange={e=>setData({...data,class:e.target.value.toLowerCase()})}
    >
    <MenuItem value={"cs"}>Computer Science</MenuItem>
    <MenuItem value={"it"}>Information Technology</MenuItem>
    <MenuItem value={"ece"}>Electronics</MenuItem>
    <MenuItem value={"ee"}>Electrical</MenuItem>
    <MenuItem value={"eee"}>Electrical & Electronics</MenuItem>
    <MenuItem value={"civil"}>Civil</MenuItem>
    <MenuItem value={"me"}>Mechanical</MenuItem>
  
  </Select>
  </FormControl>
{/* <TextField id="outlined-basic" label="Current Semester" variant="outlined" /> */}
<FormControl>
<InputLabel>Current Semester</InputLabel>
<Select
    label="Current Semester"
    value={data.currentSemester} 
    onChange={e=>setData({...data,currentSemester:e.target.value})}
    >
    <MenuItem value={"1"}>First</MenuItem>
    <MenuItem value={"2"}>Second</MenuItem>
    <MenuItem value={"3"}>Third</MenuItem>
    <MenuItem value={"4"}>Fourth</MenuItem>
    <MenuItem value={"5"}>Fifth</MenuItem>
    <MenuItem value={"6"}>Sixth</MenuItem>
    <MenuItem value={"7"}>Seventh</MenuItem>
    <MenuItem value={"8"}>Eight</MenuItem>
  </Select>
  </FormControl>

{/* <TextField id="outlined-basic" label="Gender" variant="outlined" value={data.gender} onChange={e=>setData({...data,gender:e.target.value})}/> */}
<FormControl>
<InputLabel>Gender</InputLabel>
<Select
    value={data.gender}
    label="Gender"
    placeholder="Gender"
    onChange={e=>setData({...data,gender:e.target.value})}
    >
    <MenuItem value={"male"}>Male</MenuItem>
    <MenuItem value={"female"}>Female</MenuItem>
    <MenuItem value={"other"}>Other</MenuItem>
  </Select>
</FormControl>
<div></div>
<div>Academics Details</div>
<div></div>
<hr></hr>
<hr></hr>
<TextField id="outlined-basic" label="Subject 1" variant="outlined" value={data.subject1} onChange={e=>setData({...data,subject1:e.target.value.toLowerCase()})}/>
<TextField id="outlined-basic" label="Subject 2" variant="outlined" value={data.subject2} onChange={e=>setData({...data,subject2:e.target.value.toLowerCase()})}/>
<TextField id="outlined-basic" label="Subject 3" variant="outlined" value={data.subject3} onChange={e=>setData({...data,subject3:e.target.value.toLowerCase()})}/>
<TextField id="outlined-basic" label="Subject 4" variant="outlined" value={data.subject4} onChange={e=>setData({...data,subject4:e.target.value.toLowerCase()})}/>
<TextField id="outlined-basic" label="Subject 5" variant="outlined" value={data.subject5} onChange={e=>setData({...data,subject5:e.target.value.toLowerCase()})}/>
<div></div>
<div>
<Button variant="contained" disabled={load} onClick={handleSubmit}>Add Student</Button>
</div>
</div>
</>;
}
export default AdminForm;