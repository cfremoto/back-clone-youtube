import express from "express";
import authRoutes from "./auth.js";
import commentRoutes from "./comments.js";
import userRoutes from "./users.js";
import videoRoutes from "./videos.js";
const router = express.Router()



router.use("/v1/auth", authRoutes);
router.use("/v1/users", userRoutes);
router.use("/v1/videos", videoRoutes);
router.use("/v1/comments", commentRoutes);

export default router;
