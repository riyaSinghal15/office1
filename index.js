const express = require('express')
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');


dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    },
    () => console.log('Connected to db!')
);

//Middleware
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);

app.use('/api/posts', postRoute);


app.post('/tpo_register', async (req, res) => {
    // res.send('Registered');
    
   // LETS VALIDATE THE DATA BEFORE WE MAKE A USER
    // const { error } = schema.validate(req.body);
    
    const { error } = tpoRegisterValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //Checking if the user is already in the database
    const emailExist = await Tpo.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exist');
    // res.send(Validation);

    //Hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //  Create a new user
    const tpo = new Tpo({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
        designation: req.body.designation,
        college: req.body.college,
    });
    try{
        const savedUser = await tpo.save();
        res.send({tpo: tpo._id});
        // res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});
const port = process.env.PORT || 3002;
const listener = app.listen(port, () => {
    console.log("server up and running" + listener.address().port);
});
