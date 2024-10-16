import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import postRoute from "./postRoutes.js";
import notificationRoute from "./notificationRoutes.js";
import messageRoute from "./messageRoutes.js";
import storyRoute from "./storyRoutes.js";

const router = express.Router();

router.use(`/auth`, authRoute); //auth/register
router.use(`/users`, userRoute);
router.use(`/posts`, postRoute);
router.use(`/notifications`, notificationRoute);
router.use(`/messages`, messageRoute);
router.use(`/stories`, storyRoute);
export default router;
