const Comment = require('../models/commentModel');

exports.addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const comment = new Comment({ content, blog: req.params.id, user: req.user.id });
    await comment.save();
    res.status(201).json({ success: true, comment });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
