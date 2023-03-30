const mongoose = require("mongoose");

const addressUserSchema = new mongoose.Schema({
    lastData: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    idUser: {
        type: String,
        required: true,
    },
    idAction: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    fullCost: {
        type: mongoose.Schema.Types.Mixed,
    }
});

const addressUserModel = mongoose.model("addressUserModel", addressUserSchema);

module.exports = addressUserModel;
