const express = require("express");
const router = express.Router();

const penerimaControllers = require("../controllers/penerima");

router.post("/add", penerimaControllers.Create);
router.get("/", penerimaControllers.Read);
router.put("/edit/:id", penerimaControllers.Update);
router.delete("/delete/:id", penerimaControllers.Delete);

module.exports = router;