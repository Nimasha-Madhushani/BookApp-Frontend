import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          {/* render texts inside the body */}
          <Typography>
            <BookIcon />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={handleChange}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" value="1" />
            <Tab LinkComponent={NavLink} to="/about" label="About us" value="2" />
            <Tab LinkComponent={NavLink} to="/books" label="All books" value="3" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
