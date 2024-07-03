import './../../components/Notification.js/Notification.css';

import "./../../components/Notification.js/Notification.css";
import { Avatar, Button } from "@mui/material";
import axios from "axios";
import path from "./../../path";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, matchRoutes } from "react-router-dom";
import DateDiff from "date-diff";
import CustomPopup from "../../components/common/CustomPopup";

const sampleNotificationData = [{
    createdAt : new Date(),
    isSeen : true,
    username : "naveen12venom",
    msg:"topic if the notice",
    extra : "by this one"
}];

const AdminComplaints = () => {
  const [notifications, setNotifications] = useState(sampleNotificationData);
  const [showPopup,setShowPopup] = useState(false);
  const user = useSelector((s) => s.user);

  const getNotifications = async () => {
   
  };

  const markedAsSeen = async ()=>{
    try{
   
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="notification-panel">
      {
        showPopup && <CustomPopup close={()=>setShowPopup(false)}></CustomPopup>
      }
      <div className="panel-heading"><p>Student Complaints</p> <button onClick={markedAsSeen} variant="outlined">Marked as Seen</button></div>
      <div className="table">
        <div className="table-head">
          <p>User</p>
          <p>Information</p>
          <p>Time</p>
        </div>
        {notifications ? (
          <>
            {notifications.map((ele) => {
              const dateNow = new Date();
              const createdAt = new Date(ele.createdAt);
              const time = new DateDiff(dateNow, createdAt);
              let timeToshow;
              if (time.minutes() < 60) {
                timeToshow = time.minutes().toFixed(0) + " mins ago";
              } else if (time.hours() < 25) {
                timeToshow = time.hours().toFixed(0) + " hours ago";
              } else if (time.days() < 8) {
                timeToshow = time.days().toFixed(0) + " days ago";
              } else {
                timeToshow = time.weeks().toFixed(0) + " weeks ago";
              }

              return (
                <div className={ele.isSeen ? "table-row" : "table-row unseen"} onClick={()=>setShowPopup(true)}>
                  <Avatar src={ele.profilePicture}></Avatar>
                  <p>
                    {" "}
                    <Link
                      to={``}
                      className="username-link"
                    >
                      {ele.username}
                    </Link>{" "}
                    {ele.msg}
                    {/* {ele.extra && <Link to={ele.link}> {" " + ele.extra}</Link>} */}
                    {!ele.isSeen && <span className="new-indicator"></span>}
                  </p>
                  <p className="time">{timeToshow}</p>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AdminComplaints;


