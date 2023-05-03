require("./db/index");
const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/routes");

app.use("/api/v1", routes);
// app.get('/', (req, res) =>{
//     res.send(`<h3>Hello from Express </h3>`);
// })
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
