import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className="w-full p-4">
      <div className="flex">
        <Typography>
          Blazingly fast developed by 
        </Typography>
        <Typography color="primary">
          &nbsp;<u>netspie</u>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
