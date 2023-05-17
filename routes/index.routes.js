const express = require("express");
const bodyParser = require('body-parser')
const router = express.Router();
var multer = require('multer');
const upload = multer();

const indexController = require("../controller/controller.index"); 


router.post("/sample", indexController.process);


module.exports = router;