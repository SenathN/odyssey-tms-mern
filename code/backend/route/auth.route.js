const express = require("express");
const router = express.Router();

//get all user records
router.post("/login" , async (req, res) => {
    try {
        console.log('req?.body', req?.body)
        const user = await User.findOne({ email: req?.body?.email, password: req?.body?.password });
        if (user) {
            res.status(200).json({"_id": user._id})
        } else
            res.sendStatus(401)
    } catch (error) {
        res.status(500).send("Server Error : " + error);
    }
})

module.exports = router;