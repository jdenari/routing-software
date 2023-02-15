const router = require("express").Router();
const { createNoSubstitutionTemplateLiteral } = require("typescript");
const Address = require("../models/addressesExample");

// register a new user
router.get("/addressesExample", async (req, res) => {

    try {
        const addresses = await Address.find({}); // find all documents and only return the address field
        res.status(200).json(addresses);

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// register a new user
router.post("/addressesExample", async (req, res) => {

    try {
        const data = req.body; // assuming the data you want to insert is in the request body
        const newAddress = new Address(data);
        await newAddress.save();
        res.status(201).json(newAddress); // return the newly inserted document as the response

      } catch (error) {

        res.status(500).json({ message: "Internal server error" });
      }
});

module.exports = router;


