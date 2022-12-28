const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://movieApp:Chhavi143@cluster0.6kcim8c.mongodb.net/netflix?retryWrites=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});


app.use(express.static(path.resolve("./movie-app-UI/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./movie-app-UI/build/index.html"));
});