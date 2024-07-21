import "./Notification.css";
import { Avatar, Button } from "@mui/material";
import axios from "axios";
import path from "./../../path";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, matchRoutes } from "react-router-dom";
import DateDiff from "date-diff";
import CustomPopup from "../common/CustomPopup";
import { CatchingPokemon } from "@mui/icons-material";

const sampleNotificationData = [
  {
  Sender : {
    FullName : "Naveen"
  },
  Title : "Welcome to StudentPRO",
  Body:"Here your one place to Find Everything."
  },
];

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState(sampleNotificationData);
  const [showPopup, setShowPopup] = useState(false);
  const [currentNotification,setCurrentNotification] = useState({});
  const user = useSelector((s) => s.user);

  const getNotifications = async () => {
    try {
      const response = await axios.get(path + "admin/notice");
      if (response.data) {
        setNotifications(response.data);
      }
    } catch (err) {}
  };

  const markedAsSeen = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="notification-panel">
      {showPopup && (
        <CustomPopup data={currentNotification} close={() => setShowPopup(false)}></CustomPopup>
      )}
      <div className="panel-heading">
        <p>Notifications</p>{" "}
        <button onClick={markedAsSeen} variant="outlined">
          Marked as Seen
        </button>
      </div>
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
                <div
                  className={ele.isSeen ? "table-row" : "table-row unseen"}
                  onClick={() => {
                    setShowPopup(true)
                    setCurrentNotification(ele);
                  }}
                >
                  <Avatar sx={{backgroundColor:"teal"}}>
                    {
                      ele?.Sender?.FullName ? ele?.Sender.FullName[0] : "N"
                    }
                  </Avatar>
                  <p>
                    {" "}
                    <span>
                    <Link to={``} className="username-link">
                      {ele.Sender?.FullName} : 
                    </Link>
                    {ele.Title}
                    </span>
                    <span className="mx-2 text-gray-500">
                      {ele.Body?.slice(0, 60)}
                      {
                        ele.Body?.length > 20 ? "..." : ""
                      }
                    </span>
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

export default NotificationPanel;
