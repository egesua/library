import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";

const Student = () => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

  return (
    <div>
      <Box
        component="form"
        sx={{
        }}
        noValidate
        autoComplete="off"
      >
        <Container>
          <Paper
            elevation={3}
            sx={{ padding: "50px 20px", width: 600, margin: "10px auto" }}
          >
            <h1 style={{color: "blue", position:"relative", }}><b>Add Student</b></h1>
            <form>
              <TextField
                id="outlined-basic"
                label="Student Name"
                variant="outlined"
                fullWidth
                sx={{mb:2}}
              />
              <TextField
                id="outlined-basic"
                label="Student Adress"
                variant="outlined"
                fullWidth
              />
            </form>
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default Student;
