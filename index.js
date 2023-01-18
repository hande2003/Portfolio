require('dotenv').config();
const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.status(200).sendFile(process.cwd()+'/views/profile.html')
})

app.get('/github', (req, res)=>{
    res.status(200).redirect(process.env.GITHUB);
})

app.get('/call-me', (req, res)=>{
    res.status(200).redirect(process.env.PHONE);
})

app.get('/email-me', (req, res)=>{
    res.status(200).redirect(process.env.EMAIL);
})

app.get('/replit', (req, res)=>{
    res.status(200).redirect(process.env.REPLIT);
})

app.use('/public', express.static(process.cwd()+'/public'));

app.listen(process.env.PORT, ()=>{
    console.info(`Your application is listening on port ${process.env.PORT}`)
})
