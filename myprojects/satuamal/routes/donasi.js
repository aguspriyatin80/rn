const express = require("express");
const router = express.Router();

const donasiControllers = require("../controllers/donasi");

router.post("/add", donasiControllers.Create);
router.get("/", donasiControllers.Read);
// router.put("/edit/:id", donasiControllers.Update);
// router.delete("/delete/:id", donasiControllers.Delete);

module.exports = router;