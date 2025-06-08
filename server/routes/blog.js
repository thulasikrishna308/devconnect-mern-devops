import { createBlog, getBlogs, addComment, likeBlog } from '../controllers/blogController.js';
import express from 'express';

const router = express.Router();

router.post('/', createBlog);
router.get('/', getBlogs);

// New routes
router.post('/:id/comments', addComment);
router.post('/:id/like', likeBlog);

export default router;
