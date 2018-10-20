const router = require("express").Router()
const controller = require("./controller.js");

router
  .route('/places')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.post)
  .put(controller.put)

module.exports = router;