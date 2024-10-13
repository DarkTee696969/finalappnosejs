const Posttest = require('../models/posttest'); // เรียกใช้โมเดล Posttest

//CRUD
exports.getPosts = async (req, res) => {
    try {
        const posts = await Posttest.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Posttest.findById(id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createPost = async (req, res) => {
    const { title, content, address, tel, message, date } = req.body;

    const post = new Posttest({ title, content, address, tel, message, date });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Posttest.findById(id);

        if (!post) return res.status(404).json({ message: 'Post not found' });
        const data = { $set: req.body };

        await Posttest.findByIdAndUpdate(id, data);

        res.status(200).json({ message: 'Post updated successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Posttest.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        await Posttest.findByIdAndDelete(id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
