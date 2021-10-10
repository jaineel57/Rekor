const express = require('express');
const app = express();
const cors = require('cors')
const knex = require('./db')

require('dotenv').config();

app.use(express.json())
app.use(cors({
  origin :'*'
}))

app.get("/",async(req,res)=>{
  try {
    res.json('Server running....')
  } catch (err) {
    console.log(err)
    res.status(500).json(`ERROR : $${err.message}`)
  }
})
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log('server running')
})

  

app.post("/login",async(req,res)=>{

  try {

      console.log("req.body",req.body)
       const email = req.body.id.fetchedEmail
       const password = req.body.password.fetchedPassword
       console.log(email,password,"emailpasswordd")
       const str = await knex.from('users')
        .select('roles')
        .where({login_id:email}) 
        .where({password:password})
      console.log(str,"strr")
      res.json(str)

  } catch (err) {
    console.log(err)
  }
})

