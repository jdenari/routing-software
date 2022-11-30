const mongoose = require("mongoose");

const routeringSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    userID:{
        type: mongoose.ObjectId
    }
});

const routering = mongoose.model("routering", routeringSchema);

module.exports = routering