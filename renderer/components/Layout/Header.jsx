import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "@mui/material/Link";
const Header = () => {
  return (
    <>
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Link
            color="inherit"
            underline="none"
            href="/home"
            style={{ justifyContent: "center" }}
          >
            <Image src={require("../../public/images/logo_white.png")} />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
