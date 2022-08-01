import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontFamily:'fantasy'}} variant="h2">This ia a CRUD Application</Typography>
        <Typography variant="h3">By MERN Stack</Typography>
        
      </Box>
    </div>
  );
};

export default About;
