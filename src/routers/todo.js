const express = require('express')
// import controller from '../controllers/todoController'
const controller = require('../controllers/todoController')
const router = express.Router();

//get
router.get("/", controller.getAll);
router.get("/:id", controller.get);
//post
router.post("/", controller.add);
//put
router.put("/:id", controller.update);
//delete
router.delete("/:id", controller.delete);

module.exports = router;