import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Link from "../Link";
const Header = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            <Link href="/home">DashBoard</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="/treeview">Tree View</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="/image">Image</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
