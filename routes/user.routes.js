const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user.controllers");

router.get("/", userControllers.getAllUsers);
router.get("/:userId", userControllers.getSingleUser);
router.post("/", userControllers.createNewUser);
router.put("/:userId", userControllers.updateUser);
router.delete("/:userId", userControllers.deleteUser);

module.exports = router;
