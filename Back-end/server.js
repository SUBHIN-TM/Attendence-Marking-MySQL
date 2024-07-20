import express from "express"
import cors from "cors"
import user from "./router/user.js"
import {connect} from "./config/dbConnection.js"

const app=express()
const PORT=3000

app.use(express.json())
app.use(cors())

app.use("/",user)

connect()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });