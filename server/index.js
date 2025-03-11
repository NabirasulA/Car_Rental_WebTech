const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const CustomerModel=require('./models/Customer')
const ContactModel=require('./models/Contact')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/customer");

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    CustomerModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req,res)=>{
    // CustomerModel.create(req.body)
    // .then(customers => res.json(customers))
    // .catch(err => res.json(err))
    const {name,email,password}=req.body;
    CustomerModel.findOne({email:email})
    .then(user=>{
        if(user){
            res.json("Already have an account")
        }else{
            CustomerModel.create({name:name,email:email,password:password})
            .then(result=>res.json(result))
            .catch(err=>res.json(err))

        }
    }).catch(err=>res.json(err))
})

app.post('/contact', (req, res) => {
    // Establish Mongoose connection if not already connected
    if (!mongoose.connection.readyState) {
      mongoose.connect('mongodb://localhost:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
    }
  
    const { first_name, last_name, email, phone, message } = req.body;
    ContactModel.create({ first_name, last_name, email, phone, message })
      .then((result) => {
        res.json({ message: 'Contact saved successfully', data: result });
      })
      .catch((err) => {
        console.error('Error saving contact:', err);
        res.status(500).json({ message: 'Error saving contact' });
      });
  });
app.listen(3001,()=>{
    console.log("server is running")
})












