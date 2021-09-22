import express, { response } from "express";
import mongoose from 'mongoose';
import userRoute from './Routes/userRoute'
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://amarnath:LV566d2HdAGVpDCM@cluster0.fwerk.mongodb.net/blog?retryWrites=true&w=majority').then(response=>{
  console.log('mongoDB connected')
}).catch(err=>{
  console.log(err)
})

app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api',userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

