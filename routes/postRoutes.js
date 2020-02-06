const express = require('express');
const middleware = require('../middleware/token')
const postController = require('../controller/postController');
const postRouter = express.Router();

postRouter.post('/post',  middleware.verifyToken, postController.addPost);

postRouter.get('/post', middleware.verifyToken, postController.getPost);

module.exports = postRouter;