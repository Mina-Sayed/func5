const todoHandler = require('../handlers/todoHandler');
const express = require('express');
const router = express.Router();

router.get('/', todoHandler.getTodos);
router.get('/:todoId', todoHandler.getTodo);
router.delete('/:todoId', todoHandler.deleteTodo);
router.put('/:todoId', todoHandler.updateTodo);
router.post('/', todoHandler.createTodo);

module.exports = router;
