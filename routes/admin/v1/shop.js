const express = require("express");
const router = express.Router();
const ShopController = require("../../../controller/admin/v1/shopController");
const {PLATFORM} = require("../../../constants/authConstant");
const auth = require("../../../middleware/auth");



router.post('/create',auth(PLATFORM.USERAPP),ShopController.addShop);
router.get('/get/:id',auth(PLATFORM.USERAPP), ShopController.getShop);
router.post('/list',auth(PLATFORM.USERAPP), ShopController.findAllShop);
router.post('/count',auth(PLATFORM.USERAPP),ShopController.getShopCount);
router.put('/update/:id',auth(PLATFORM.USERAPP), ShopController.updateShop);
router.put('/update-like/:id',auth(PLATFORM.USERAPP), ShopController.updateShopLike);
router.delete('/soft-delete/:id',auth(PLATFORM.USERAPP), ShopController.softDeleteShop);
router.delete('/delete/:id',auth(PLATFORM.USERAPP),ShopController.deleteShop);


module.exports = router;


