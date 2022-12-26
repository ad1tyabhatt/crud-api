const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const port = 3000;
const User = require("./models/student");

mongoose.connect(
   "mongodb://localhost:27017/crud",
   {
      useNewUrlParser: true,
   },
   (err) => {
      if (!err) {
         console.log("MongoDB Connection Succeeded.");
      } else {
         console.log("Error in DB connection: " + err);
      }
   }
);

app.get("/", (req, res) => {
   res.send("Welcome");
});

//create a new class
app.post("/v1/myClass", (req, res) => {
   res.status(201).json({
      studentid: Math.random() * 10,
   });
});

//Register a new student to class
app.post("/v1/myClass/:myClassId/students", (req, res) => {
   res.status(201).json({
      studentid: Math.random() * 10,
   });
   console.log(req.params);
});

//list out all the classes
app.get("/v1/myClass", (req, res) => {
   res.status(200).json();
   // console.log(req.params)
});

// Get a specific class
app.get("/v1/myClass/:myClassId", (req, res) => {
   res.status(200).json();
   // console.log(req.params)
});

// Get all students in a specific class
app.get("/v1/myClass/:myClassId/students", (req, res) => {
   res.status(200).json();
   // console.log(req.params)
});
// Get one student details
// GET /v1/myClass/:myClassId/students/:studentId

app.get("/v1/myClass/:myClassId/students/:studentId", (req, res) => {
  if(studentid){
    res.status(200).json();
  }
  else{
    res.json({
      message:"No student found"
    })
  }
   // console.log(req.params)
});

// update student information
//  Put /v1/myClass/:myClassId/students/:studentId
app.put("/v1/myClass/:myClassId/students/:studentId", (req, res) => {
  if(studentid){
    res.status(200).json();
  }
  else{
    res.json({
      message:"No student found"
    })
  }
   // console.log(req.params)
});

// Delete a specified class 
app.delete("/v1/myClass/:myClassId", (req, res) => {
  if(studentid){
    res.status(200).json();
  }
  else{
    res.json({
      message:"No student found"
    })
  }
   // console.log(req.params)
});

// Delete a student
app.delete("/v1/myClass/:myClassId/students/:studentId", (req, res) => {
  if(studentid){
    res.status(200).json();
  }
  else{
    res.json({
      message:"No student found"
    })
  }
   // console.log(req.params)
});

app.listen(port, () => {
   console.log(`app running on ${port}`);
});
