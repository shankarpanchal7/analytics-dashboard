const { Router } = require("express");
const { isLoggedIn } = require("../middleware/auth");
const router = Router();
router.post("/:viewId", isLoggedIn, async (req, res) => {
  try {
    const { username } = req.user;
    const viewId = req.params.viewId;
    res.status(200).json({viewId: viewId, username})
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/", isLoggedIn, async (req, res) => {
  try {
    const { username } = req.user;
    const viewId = req.params.viewId;
    res.status(200).json({viewId: viewId, username})
  } catch (error) {
    res.status(400).json({ error });
  }
});


module.exports = router;
