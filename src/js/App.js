import { Button } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification("my custom notification");
        }}
      >
        notify
      </button>
      <Button variant="contained">hello</Button>
      <input type="file" webkitdirectory="true" />
      <h1>hello world</h1>
    </>
  );
};
export default App;
