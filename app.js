import express  from "express";
import dotenv from "dotenv"
import db from "./config/db.js"
import  router  from "./routes/contactRoutes.js";


const PORT = 5000;
const app = express();
dotenv.config();
db()
app.use(express.json());
app.use('/api', router)



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})