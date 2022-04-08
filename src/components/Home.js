import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        ></Button>
      </Box>
    </div>
  );
};

export default Home;
