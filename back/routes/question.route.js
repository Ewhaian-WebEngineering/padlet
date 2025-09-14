import express from "express";
import { postQuestion,editQuestion,deleteQuestion,getQuestion, getQuestionDetail} from "../controllers/question.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.options("/", (req, res) => {
  res.sendStatus(204);
});

//등록
router.post("/",requireAuth,postQuestion);
//수정
router.put("/:id",requireAuth,editQuestion);
//삭제
router.delete("/:id",requireAuth,deleteQuestion);
//불러오기
router.get("/:id",getQuestion);

//상세 불러오기
router.get("/detail/:id",getQuestionDetail);

export default router;