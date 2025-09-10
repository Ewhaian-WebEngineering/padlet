import express from "express";
import { postQuestion,editQuestion,deleteQuestion} from "../controllers/question.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router=express.Router();

//등록
router.post("/",requireAuth,postQuestion);
//수정
router.put("/:id",requireAuth,editQuestion);
//삭제
router.delete("/:id",requireAuth,deleteQuestion);

export default router;