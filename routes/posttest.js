const express = require('express'); 

const { getPosts, getPost, createPost, updatePost, deletePost} = require('../controllers/postController');

const authenticateToken = require("../middlewares/auth");

const router = express.Router();

router.get('/posts',authenticateToken, getPosts);
router.get('/post/:id',authenticateToken,getPost);
router.post('/post',authenticateToken,createPost);
router.put('/post/:id',authenticateToken, updatePost);
router.delete('/post/:id',authenticateToken, deletePost);

module.exports = router;
