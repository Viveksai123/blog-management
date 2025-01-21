const Blog = require('../models/blogModel');

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({ title, content, author: req.user.id });
    await blog.save();
    res.status(201).json({ success: true, blog });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
