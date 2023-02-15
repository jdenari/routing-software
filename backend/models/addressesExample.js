const mongoose = require("mongoose");

const addressesExampleSchema = new mongoose.Schema({
    address: {
        type: String,
    },
})

const addressesExample = mongoose.model('addressesExample', addressesExampleSchema);

module.exports = addressesExample;