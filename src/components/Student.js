import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Paper } from "@mui/material";

const Student = () => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        const student = {name, address}
        console.log(student);
        fetch("http://localhost:8585/student/add", {
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(student)
        })
        .then(() => {
            console.log("New student added!")
        }).catch((err) => {console.log(err)})
    }

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
            sx={{ padding: "30px 20px", width: 600, margin: "20px auto" }}
          >
            <h1 style={{color: "blue"}}><b>Add Student</b></h1>
            <form>
              <TextField
                id="outlined-basic"
                label="Student Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{mb:2}}
              />
              <TextField
                id="outlined-basic"
                label="Student Adress"
                variant="outlined"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button variant="contained" color="success" style={{margin: 4}} onClick={handleClick}>Submit</Button>
            </form>
            {name}
            {address}
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default Student;
