const mongoose = require("mongoose");

const URI =
  "mongodb+srv://root:hLcTQpkJUchS3EAa@cluster0.lizib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//acc:root pwd:hLcTQpkJUchS3EAa

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("Atlas DB connected!");
});
