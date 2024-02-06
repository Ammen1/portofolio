import { errorHandler } from "../utils/error.js";
import Post from "../models/post.model.js";

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(404, "You are not allowed to create post"));
  }
  if (!req.body.title || req.body.content) {
    return next(errorHandler(404, "Please provide all required fields"));
  }
  const slug = req.body.title.split(" ").jon("-");
  toLowerCase().replace(/[^a-zA=Z0-9-]/g, "");
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedPost = await newPost.save();
    req.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};
