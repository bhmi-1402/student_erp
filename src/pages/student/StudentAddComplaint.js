import "./../admin/admin.css";
import { Avatar, TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";

const StudentAddComplaint = () => {
  const [load, setLoad] = useState(false);
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
          className="fullwidth"
          placeholder="Subject of the Complant"
        />
      </div>

      <div className="create-post-form">
        <span>Body</span>
        <TextField
          id="standard-basic"
          fullWidth
          multiline
          rows={12}
          sx={{
            backgroundColor: "whitesmoke",
          }}
          className="fullwidth"
          placeholder={"To\nAdmin,\nGrievence Department,\nJSSATEN\nSubject : I have Suggestion\\Complaint regarding [TOPIC]\nSir,\n    I want to say that..."}
        />
      </div>

      <div className="submit-post">
        <Button variant="outlined" disabled={load}>
          {load ? <CircularProgress></CircularProgress> : "Send Notice"}
        </Button>
      </div>
    </>
  );
};

export default StudentAddComplaint;
