import "./admin.css";
import { Avatar, TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import data from './../teacher/teacherDemo.json'
import axios from "axios";
import path from "../../path";

const AdminAddNotice = () => {
  const [load, setLoad] = useState(false);
  const [user,setUser] = useState(data);

  const [Title,setTitle] = useState("");
  const [Body,setBody] = useState("");

  const submit = async ()=>{
    setLoad(true);
    try{
        const res = await axios.post(path+'admin/notice',{
          Title,
          Body,
          Sender : {
            _id : user._id,
            FullName : user.FullName
          }
        })

        if(res.data.success){
          setTitle('');
          setBody('');
        }else{
          alert("Error");
        }

    }catch(er){
      console.log(er);
    }
    setLoad(false);
  }

  return (
    <>
      <div className="create-header">
        <div className="create-header-left">
          <Avatar
            sx={{ width: "50px", height: "50px", bgcolor: "teal" }}
          ></Avatar>
          <div>
            <p>Naveen Chaudhary</p>
            <span>username jssaten</span>
          </div>
        </div>
      </div>

      <div className="create-post-form">
        <span>Subject</span>
        <TextField
          id="standard-basic"
          fullWidth
          sx={{
            backgroundColor: "whitesmoke",
          }}
          value={Title}
          onChange={e=>setTitle(e.target.value)}
          className="fullwidth"
          placeholder="Subject of the Notice"
        />
      </div>

      <div className="create-post-form">
        <span>Body</span>
        <TextField
          id="standard-basic"
          fullWidth
          multiline
          value={Body}
          onChange={e=>setBody(e.target.value)}
          rows={12}
          sx={{
            backgroundColor: "whitesmoke",
          }}
          className="fullwidth"
          placeholder="Write Notice here ..."
        />
      </div>

      <div className="submit-post">
        <Button variant="outlined" disabled={load} onClick={submit}>
          {load ? <CircularProgress></CircularProgress> : "Send Notice"}
        </Button>
      </div>
    </>
  );
};

export default AdminAddNotice;
