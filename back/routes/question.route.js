import express from "express";
import {
  postQuestion, editQuestion,
  deleteQuestion, getQuestion,
  getQuestionDetail, getAllQuestion
} from "../controllers/question.controller.js";
import { requireAuth } from "../middleware/auth.js";

const questionRouter = express.Router();

questionRouter.options("/", (req, res) => {
  res.sendStatus(204);
});

//전체 목록 가져오기
questionRouter.get("/", getAllQuestion);

//등록
questionRouter.post("/",requireAuth,postQuestion);
//수정
questionRouter.put("/:id",requireAuth,editQuestion);
//삭제
questionRouter.delete("/:id",requireAuth,deleteQuestion);
//불러오기
questionRouter.get("/:id",getQuestion);

//상세 불러오기
questionRouter.get("/detail/:id",getQuestionDetail);


export default questionRouter;