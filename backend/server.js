const express = require('express');

const cors = require('cors');

const dashboardRoute = require("./routes/dashboard");

const app = express();
app.use(cors());

app.use("/api/dashboard", dashboardRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})