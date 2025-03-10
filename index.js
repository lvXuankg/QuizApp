const express = require('express');
require("dotenv").config();
const app = express();
const route = require("./routes/client/index.route");
const port = process.env.PORT;

// file tinh 
app.use(express.static(`${__dirname}/public`));

app.set("views", "./views");
app.set("view engine", "pug");

//Routes 
route(app);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})