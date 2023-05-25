const mongoose = require("mongoose");

const URI =
 // "mongodb+srv://root:0FB1mN2iGeUHrduP@cluster0.lizib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
"mongodb+srv://root:0FB1mN2iGeUHrduP@cluster0.svcvryl.mongodb.net/?retryWrites=true&w=majority";
//acc:root pwd:0FB1mN2iGeUHrduP

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
