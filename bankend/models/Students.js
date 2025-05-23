const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    religion: String,
    email: String,
    studentClass: String,
    phone: String,
    photo: String, // File name or URL
});

module.exports = mongoose.model("Student", studentSchema);
