//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyparse = require('body-parser');
const User = require('./user');
const app = express();
const url = "mongodb+srv://NodeUser:nodejs@trio.umoww.mongodb.net/NodeDB?retryWrites=true&w=majority";
// const url = "mongodb://NodeUser:nodejs@trio-shard-00-00.umoww.mongodb.net:27017,trio-shard-00-01.umoww.mongodb.net:27017,trio-shard-00-02.umoww.mongodb.net:27017/NodeDB?ssl=true&replicaSet=atlas-72hs60-shard-0&authSource=admin&retryWrites=true&w=majority"
const PORT = process.env.PORT || 6000;
const connectDB = async () => {
   mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindandModify: true,
  })
  .then(() => console.log("connected"))
  .catch((error) => console.log(error.message));
};
connectDB();
app.use(cors());
app.use(express.json());
app.post('/user' , (req,res)=>
{
  const {username,firstname,lastname,password,confirmpassword,emailid,accountno}=req.body;
  let balance = 10000
  User.findOne({accountno:accountno}).then(user=>{
    if(user){
      res.json({status:'Signup',error:'accountno already exist❌'});
    }
    else{
      User.findOne({emailid:emailid}).then(user => {
        if(user){
          res.json({status:'Signup',error:'emailid already exist❌'});
        }
        else
        {
          User.findOne({username:username}).then(user =>{
            if(user){
              res.json({status:'Signup',error:'username already exist❌'});
            }
            else{
                const user = new User({
       
        _id : new mongoose.Types.ObjectId,
       username : req.body.username,
       firstname : req.body.firstname,
       lastname : req.body.lastname,
       password : req.body.password,
       confirmpassword : req.body.confirmpassword,
       emailid : req.body.emailid,
       accountno : req.body.accountno,
       balance: 10000
    });
    user.save()
    .then(result=>{
        console.log(result);
        res.json({status: 'login',error: "Registeration successful ☑"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error occured"})
    })  
            }
          })
        }
      })
    }
  })
})
app.post('/login', function(req, res) {
  const { username , password}=req.body;
  let allusers = []
  User.find().then(users=>{
    allusers = users;
    console.log(allusers);
  })
  User.findOne({username:username}).then(user=>{
    if(user)
    {
      if(user.password==password)
      {
        console.log("login successfull");
        res.json({status:"Dashboard",allusers,user,error: "Login Successfull ☑"});
      }
      else{
        res.json({status: "login",error:"Invalid Password❌"})
      }
    }
    else{
      res.json({status: "login",error:"User does not exist❌"})
    }
  })
});
app.post('/paycust',function(req,res) {
  const { payingUser , Amount , currentUser } = req.body;
  console.log(payingUser.username)
  if(payingUser === currentUser)
  res.json({status:"Customers",error: "You are not allowed to pay yourself"})
  else{
  if(Amount <= 0)
  {
    res.json({error: "Amount can never be 0 or negative❌"})
  } else {
  User.findOne({username:currentUser.username}).then(user => {
    if(user.balance < Amount)
    {
      res.json({error: "Insufficient Balance❌"})
    }
    else{
      User.findOneAndUpdate({"username":currentUser.username},{$inc:{"balance":-Amount}}).then(user => {
        User.findOneAndUpdate({"username":payingUser.username},{$inc:{"balance":Amount}}).then(user => {
          res.json({ status:"login",error: "Payment Successfull ☑  Please login again"})
        })
      })
    }
  })
}
  console.log("amount done");
  }

});

// app.post('/pay' , (req,res) => {
//   const {userid}=req.body;
//   User.findByIdAndUpdate()
// })


// app.post('/login',(req,res) => {
//   const { body } = req;
//   const {
//     password
//   } = body;
//   let {
//     username
//   } = body;
//   if(!password) {
//     return res.send({
//       success:false,
//       message: 'please fill the field'
//     });
//   }
//   User.findOne({
//     username : username
//   }
//   .then(user => {
//     if(user){
//       bcrypt.compare(password,user.password,function(err,result){
//         if(err)
//         {
//           res.json
//           ({
//             error : err
//           })
//         }
//         if(result)
//         {
//           res.json({message: 'login successfull'})
//         }
//         else{
//           res.json({
//             message: 'password does not matched'
//           })
//         }
//       })
//     }else {
//       res.json({
//         message: 'No user found'
//       })
//     }
//   })
//   );
// })
// app.delete('/user/:id',(req,res)=>{
//   const id = req.params.id;
//   User.remove({_id:id},(err,result)=>{
//     if(err){
//       console.log(err);
//       res.status(500).send('error occured');
//     }
//     else{
//       res.status(200).json({msg:"successfully deleted"});
//     }
//   })
// })
// app.put('/student/:id',(req,res)=>{
//   const firstname = req.body.firstname;
//   const username = req.body.username;
//   const lastname = req.body.lastname;
//   const password = req.body.password;
//   const confirmpassword = req.body.confirmpassword;
//   const emailid = req.body.emailid;
//   const accountno = req.body.accountno;
//   const id = req.params.id;
//   User.update({_id:id},{$set:{firstname:firstname,lastname:lastname,username:username,emailid:emailid,accountno:accountno,password:password,confirmpassword:confirmpassword}})
//   .then(result=>{
//     console.log(result);
//     res.status(200).json({msg:"successfully updated"});
//   })
//   .catch(err=>{
//     console.log(err);
//     res.status(500).json({msg:"error occured"});
//   })
// })
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'Client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'Client/build', 'index.html'));
  });
}

//server
app.listen(PORT,()=>{
    console.log('server was connected on port'+PORT);
})