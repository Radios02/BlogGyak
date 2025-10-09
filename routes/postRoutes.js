import express from 'express'
import { getPosts, getPostById, savePost, updatePost, deletePost } from '../data/post.js'
const router = express.Router();

router.get("/", (req, res) => {
  const posts = db.getPosts();
  res.json("Posts");
});

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const post = db.getPostById(postId);
  res.json(post);
});

router.post("/", (req, res) => {
  const newPost = req.body;
  db.createPost(newPost);
  res.status(201).json(newPost);
});

router.put("/:id", (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;
  db.updatePost(postId, updatedPost);
  res.json(updatedPost);
});

router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  db.deletePost(postId);
  res.status(204).send();
});


export default router;