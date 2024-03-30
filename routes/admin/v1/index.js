/** 
* index.js
* @discription :: index route file for userapp platform
*/

const express = require("express");
const router = express.Router();

router.use('/admin/auth', require("./auth"));
router.use('/admin/user',require('./userRoutes'));
router.use('/admin/blog',require('./blogRoutes'));
router.use('/admin/file',require('./uploadRoutes'));


module.exports = router;