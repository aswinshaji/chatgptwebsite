const express = require('express');
const { summaryController, paragraphController, chatController, jsconverterController, scifiimageController } = require("../controller/openaiController.js");

const router = express.Router();

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiimageController);

module.exports = router;