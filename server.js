const express = require('express');
const cors = require('cors');
require ('dotenv').config();

const app = express();
app.use(cors());


app.get('/api', (req, res) => {
    const response = {
        email: 'opseyakinbohun@gmail.com',
        current_dateTime: new Date().toISOString(),
    github_url: "https://github.com/akinbohun-joseph/https://github.com/Akinbohun-Joseph/HNG-backend-internship-1"
    }
    res.status(200).json(response);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log('Server running on ${PORT}');
});
