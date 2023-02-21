const router = require("express").Router();
const db = require("../server");

// register a new user
router.get("/addressesExample", (req, res) => {
    const query = "SELECT address FROM addresses";
    db.query(query, (error, results) => {
        if (error) {
            console.error("error querying database: " + error);
            res.status(500).json({ message: "Internal server error" });
            return;
        }
        res.status(200).json(results);
    });
});

module.exports = router;


