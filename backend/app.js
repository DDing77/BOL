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
    console.log(`server running on PORT ${PORT}`);
})