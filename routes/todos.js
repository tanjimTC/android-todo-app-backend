const router = require("express-promise-router")();
const userController = require("../controllers/todos");
const {
  validateParam,
  validateBody,
  schemas,
} = require("../helpers/routeHelpers");

router
  .route("/")
  .post(validateBody(schemas.todoSchema), userController.newTodo);

router
  .route("/:todoId")
  .delete(validateParam(schemas.idSchema, "todoId"), userController.deleteTodo);

module.exports = router;
