import React, { useState } from 'react'
import {Button,TextField} from "@mui/material";
import path from "../path";
import axios from 'axios';
// import './AdminTeacher.css'

const AdminTeacher = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const handleSubmit=async()=>{
try {
    const res=await axios.post(path+'admin/addToTeacher',data)
    if(res.data.error){
        alert("Error");
    }
    
} catch (error) {
    alert("Some Error Occured")

}
    }
  return (

    <div>
        <div className="admin-teacher-title">Add Student Data to Database</div>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={data.name} onChange={onChangeHandler}/>
<TextField id="outlined-basic" label="Email" variant="outlined" value={data.email} onChange={onChangeHandler}/>
<TextField id="outlined-basic" label="Password" variant="outlined" value={data.password} onChange={onChangeHandler}/>
<div>
<Button variant="contained" onClick={handleSubmit}>Add Teacher</Button>
</div>
    </div>
  )
}

export default AdminTeacher
