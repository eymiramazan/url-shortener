const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const dbUrl = config.get("mongoURI");

const app = express();

const connectDB = async() => {
  try{
    await mongoose.connect(dbUrl,{
      useNewUrlParser:true,
      useUnifiedTopology: true
    });
    console.log("DB Connected!");
  }
  catch(err){
    console.log("Err",err.message);
    process.exit(1);
  }
}

connectDB();
const PORT = 5000;

app.use(express.json({extended: false}))
app.use(express.urlencoded({extended: false}));

app.use("/",require("./routes/index"));
app.use("/api/url",require("./routes/url"));

app.listen(PORT, () => {
  console.log("Server listening on "+PORT);
})