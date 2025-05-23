const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/admission', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
}).then(()=> console.log("MongoDB connected") )
  .catch((err)=>console.error("MongoDB error", err));