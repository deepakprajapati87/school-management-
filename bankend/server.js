
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require('path');
const mongoose = require("mongoose");
const Student = require('./models/Students');
require("./db");

const app = express(); 
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // for image access

// Multer config (file upload)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

app.post("/api/admission", upload.single("photo"), async (req, res) => {
 try{
    const newStudent = new Student({
        ...req.body,
        photo : req.file.filename,
    });

    await newStudent.save();
    res.json({message: "Student saved successfully"});
 } catch(error){
    console.error("Error saving student:", error);
    res.status(500).json({ error: "Failed to save student" });

 }
});

app.listen(5000, () => console.log("Server running on port 5000"));
  