const router = require("express").Router()
const controller = require("./controller");

router
  .route('/places')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.post)
  .put(controller.put)

module.exports.router = router;