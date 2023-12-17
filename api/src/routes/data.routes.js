const { Router } = require("express");
const { isLoggedIn } = require("../middleware/auth");
const router = Router();
const DataModel = require('../models/data.model')

router.get("/", isLoggedIn, async (req, res) => {
  try {
    const { username } = req.user;
    const viewId = req.params.viewId;

    let list = await DataModel.find({})
    res.status(200).json(list)
  } catch (error) {
    res.status(400).json({ error });
  }
});


module.exports = router;
