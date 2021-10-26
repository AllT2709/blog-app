require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connectMongo } = require("./config/db");
const postRoute = require("./components/post/post.routes");

const app = express();

app.set("port", process.env.PORT || 3000);
connectMongo(process.env.MONGO_URI);

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static(path.join(__dirname, "./public/dist")));

app.get("/", (req, res) => {
  res.send("Welcome to Blog App with MERN stack!!");
});
app.use("/posts", postRoute);

app.listen(app.get("port"), () => {
  console.log(`Sever running on port ${app.get("port")}`);
});
