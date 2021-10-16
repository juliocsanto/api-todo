const express = require('express')

const router = express.Router();

router.get("/", (req, res) => {
    console.log("Hello World");
    res.send("Hello TODO API Versão v1.0")
})

module.exports = router;