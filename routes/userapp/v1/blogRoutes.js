const express = require("express");
const router = express.Router();
const blogController = require("../../../controller/userapp/v1/blogController");
const {PLATFORM} = require("../../../constants/authConstant");
const auth = require("../../../middleware/auth");



router.post('/create',auth(PLATFORM.USERAPP),blogController.addBlog);
router.get('/get/:id', blogController.getBlog);
router.post('/list', blogController.findAllBlog);
router.post('/count',blogController.getBlogCount);
router.put('/update/:id',auth(PLATFORM.USERAPP), blogController.updateBlog);
router.put('/update-like/:id',auth(PLATFORM.USERAPP), blogController.updateBlogLike);
router.delete('/soft-delete/:id',auth(PLATFORM.USERAPP), blogController.softDeleteBlog);
router.delete('/delete/:id',auth(PLATFORM.USERAPP),blogController.deleteBlog);


module.exports = router;


