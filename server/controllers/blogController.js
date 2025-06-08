import Blog from '../models/Blog.js';

// @desc    Create blog post
export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const newPost = new Blog({ title, content, author });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create blog', error });
  }
};

// @desc    Get all blog posts
export const getBlogs = async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs', error });
  }
};

export const addComment = async (req, res) => {
    try {
      const { user, text } = req.body;
      const blog = await Blog.findById(req.params.id);
  
      if (!blog) return res.status(404).json({ message: 'Blog not found' });
  
      blog.comments.push({ user, text });
      await blog.save();
  
      res.status(200).json(blog.comments);
    } catch (error) {
      res.status(500).json({ message: 'Error adding comment', error });
    }
  };

  export const likeBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
  
      if (!blog) return res.status(404).json({ message: 'Blog not found' });
  
      blog.likes = blog.likes + 1;
      await blog.save();
  
      res.status(200).json({ likes: blog.likes });
    } catch (error) {
      res.status(500).json({ message: 'Error liking blog', error });
    }
  };
  