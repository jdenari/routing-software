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
        res.status(401).json({error: "Acesso Negado!"});
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
        res.json({ error : "Usuário atualizado com sucesso!", data: updateUser})
    } catch(error) {
        // it returns an error
        res.status(400).json({ error })
    }
})

module.exports = router;