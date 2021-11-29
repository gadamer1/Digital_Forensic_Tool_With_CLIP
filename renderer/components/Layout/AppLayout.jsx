import React from "react";
import Header from "./Header";
import Paper from "@mui/material/Paper";
const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Paper style={{ width: "88%", margin: "0 auto" }}>{children}</Paper>
    </>
  );
};

export default AppLayout;
