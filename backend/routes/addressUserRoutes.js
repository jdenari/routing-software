const express = require("express");
const addressUserModel = require("../models/addressUser");

const router = express.Router();

router.post("/saveAddressUser", async (req, res) => {
    try {
        const data = req.body;
        const keys = Object.keys(data);

        const userId = data[1].idUser;

        // Procura o usuário no banco de dados
        const user = await addressUserModel.findOne({ idUser: userId });

        let idAction = 1;

        if (user) {
            // Encontre o valor máximo de idAction do usuário
            const maxIdAction = await addressUserModel.findOne({ idUser: userId })
                .sort({ idAction: -1 })
                .limit(1)
                .select('idAction');
            if (maxIdAction) {
                idAction = Number(maxIdAction.idAction) + 1;
            }
        }

        for (const key of keys) {

            const addressUser = new addressUserModel();
            addressUser.idUser = userId;
            addressUser.address = data[key].address;
            addressUser.lastData = data[key].lastData;
            addressUser.fullName = data[key].fullName;
            addressUser.distance = data[key].distance;
            addressUser.fullCost = data[key].fullCost;
            addressUser.idAction = idAction;

            await addressUser.save();
        }

        res.status(201).json({ data });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ message: "Error saving data" });
    }
});

router.get("/getAddressUser/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;

        // Procura todos os endereços do usuário correspondente
        const addressUsers = await addressUserModel.find({ idUser: userId });

        res.json(addressUsers);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

module.exports = router;