const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./user/route");

const app = express();
app.use(cors(
  {
    origin:["https://mern-trading-api-git-main-amans-projects-ae48b0ab.vercel.app/"],
    methods:["POST" , "GET"],
    credentials:true
  }
));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kumarpriyanshu762:trade@test0.rewtgrt.mongodb.net/?retryWrites=true&w=majority&appName=Test0"
  )
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/",(req , res) => {
  res.json("Hello")
})
app.use("/api/auth", userRouter);
app.use("/api/user", userRouter)

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
