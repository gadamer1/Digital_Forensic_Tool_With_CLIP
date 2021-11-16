import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
const Header = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" style={{ marginRight: "10px" }}>
            <Link color="inherit" underline="none" href="/home">
              DashBoard
            </Link>
          </Typography>
          <Typography variant="h6" style={{ marginRight: "10px" }}>
            <Link color="inherit" underline="none" href="/treeview">
              Tree View
            </Link>
          </Typography>
          <Typography variant="h6" style={{ marginRight: "10px" }}>
            <Link color="inherit" underline="none" href="/image">
              Image
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
