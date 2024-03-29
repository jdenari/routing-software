const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

// register a new user
router.post("/register", async (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword

    // check for required fields
    if(firstName == null || lastName == null || email == null || password == null || confirmPassword == null){
        return res.status(400).json({ error: "Please you need to fill all the fields!"});
    }

    // checks if the passwords match
    if( password !=  confirmPassword){
        return res.status(400).json({ error: "The passwords does not match."});
    }

    // check if the user exists
    const emailExist = await User.findOne({ email: email});

    if(emailExist){
        return res.status(400).json({ error: "The email provided is already in use!"});
    }

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordHash
    });

    try{
        const newUser = await user.save();
        // create token
        const token = jwt.sign(
            {
                name: newUser.name,
                id: newUser._id
            },
            "oursecret"
        );
    // return token
    res.json({  error: null, 
                msg: "You have successfully registered!", 
                token: token, 
                userId: newUser._id})
        
    } catch(error){
        res.status(400).json({ error })
    }
});

router.post("/login", async (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });

    if(!user){
        return res.status(400).json({ error: "There is no registered user with this email!" })
    }
    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return res.status(400).json({ error: "Invalid password!"});
    }
    // create token
    const token = jwt.sign(
        {
            name: user.name,
            id: user._id
        },
        "oursecret"
    );
    // return token
    res.json({ error: null, msg: "You are authenticated!", 
        token: token, 
        userId: user._id, 
        firstName: user.firstName, 
        lastName: user.lastName, 
        email: user.email,
    })
})

module.exports = router;