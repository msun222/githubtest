const app = require("express")();
app.get("/", function(req, res) {
  res.send("Hey world!");
});
app.listen(8080);
