const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/sync", userController.syncUsers);
router.get("/users", userController.getUsers);
router.put("/users", userController.createUser);

module.exports = router;
