import express from "express";
import { postLike, deleteLike } from "../controllers/like.controller.js";
import { requireAuth } from "../middleware/auth.js";

const likeRoutes = express.Router();

//추가
likeRoutes.post("/",requireAuth,postLike);
//삭제
likeRoutes.delete("/:id",requireAuth,deleteLike);


export default likeRoutes;