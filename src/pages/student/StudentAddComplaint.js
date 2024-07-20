import "./../admin/admin.css";
import { Avatar, TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import path from "../../path";

const StudentAddComplaint = () => {
  const [load, setLoad] = useState(false);
  const user = useSelector(state => state.user.data);

  const [Title,setTitle] = useState("");
  const [Body,setBody] = useState("");

  const submit = async ()=>{
    setLoad(true);
    try{
        const res = await axios.post(path+'student/complaint',{
          Title,
          Body,
          Sender : {
            _id : user?._id,
            FullName : user?.FullName
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
            <p>{user?.FullName}</p>
            <span>{user?.RollNumber}</span>
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
          placeholder="Subject of the Complaint or FeedBack"
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
          placeholder="Write your Complaint/Feedback"
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

export default StudentAddComplaint;
