const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req,res) => {
    const data = {
        lastname : "mg",
        firstname : "s"
    };
    res.json(data);
})

app.listen(PORT, ()=>{
    console.log(`서버시작 server running on PORT  ${PORT}`);
    console.log(`server running on PORT ${PORT}`);
})