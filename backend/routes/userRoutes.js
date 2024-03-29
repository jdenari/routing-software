const router = require("express").Router();
const bcrypt = require("bcrypt")

const User = require("../models/user");

// middleware
const verifyToken = require("../helpers/check-token")

// helpers
const getUserByToken = require("../helpers/get-user-by-token")

// update the data profile of user
router.put("/profile", verifyToken, async (req, res) =>{
    
    // it checks if the user can modify the data
    const token = req.header("auth-token");
    const user = await getUserByToken(token);
    const userReqId = req.body.id;
    const userId = user._id.toString();

    if(userId != userReqId){
        res.status(401).json({error: "Access Denied!"});
    }

    // creating the object to update the data
    const updateData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email,
    };

    try {
        // update the data inside the mongoDB
        const updateUser = await User.findOneAndUpdate({ _id: userId }, { $set: updateData }, {new: true});
        res.json({ error : "User updated successfully!", data: updateUser})
    } catch(error) {
        // it returns an error
        res.status(400).json({ error })
    }
})

router.put("/password", verifyToken, async (req, res) =>{

    console.log(req.body)
   
    // it checks if the user can modify the data
    const token = req.header("auth-token");
    const user = await getUserByToken(token);
    const userReqId = req.body.id;
    const currentPassword = req.body.currentPassword
    const password = req.body.password;
    const confirmpassword = req.body.confirmPassword;
    const userId = user._id.toString();
    const email = req.body.email;
    const userPassword = await User.findOne({ email: email });

    if(userId != userReqId){
        res.status(401).json({error: "Access Denied!"});
    }

    const checkPassword = await bcrypt.compare(currentPassword, userPassword.password);

    if(!checkPassword){
        return res.status(400).json({ error: "Invalid password!"});
    }

    // creating the object to update the data
    const updateData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email,
    };

    // check if the password match
    if(password != confirmpassword){
        res.status(401).json({ error : "The password does not match"})
    } else if (password == confirmpassword && password != null){
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt)
        updateData.password = passwordHash;
    }

    try {
        // update the data inside the mongoDB
        const updateUser = await User.findOneAndUpdate({ _id: userId }, { $set: updateData }, {new: true});
        res.json({ error : "User updated successfully!", data: updateUser})
    } catch(error) {
        // it returns an error
        res.status(400).json({ error })
    }

})



module.exports = router;