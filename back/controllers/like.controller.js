import mongoose from "mongoose";
import Question from "../models/question.model.js";

/**
 * @swagger
 * /api/like:
 *   post:
 *     summary: 질문에 좋아요 추가
 *     tags: [Likes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionId:
 *                 type: string
 *                 description: 좋아요를 누를 질문의 ID
 *                 example: "64c1234abc1234abc1234abc"
 *             required:
 *               - questionId
 *     responses:
 *       200:
 *         description: 좋아요 추가 성공
 *       400:
 *         description: 이미 좋아요를 누른 경우
 *       404:
 *         description: 질문을 찾을 수 없음
 *       500:
 *         description: 서버 오류
 */
export const postLike = async (req, res) => {
  try {
    const { questionId } = req.body;
    const userId = req.session.user?.id;

    if (!userId) return res.status(401).json({ message: "로그인이 필요합니다." });

    const question = await Question.findById(questionId);
    if (!question) return res.status(404).json({ message: "질문을 찾을 수 없습니다." });

    const userObjectId = new mongoose.Types.ObjectId(userId);

    if (question.likedBy.some(id => id.equals(userObjectId))) {
      return res.status(400).json({ message: "이미 좋아요를 눌렀습니다." });
    }

    question.likedBy.push(userObjectId);
    await question.save();

    res.status(200).json({ message: "좋아요가 추가되었습니다.", likes: question.likedBy.length });
  } catch (err) {
    console.log("postLike error 발생", err);
    res.status(500).json({ message: err.message });
  }
};

/**
 * @swagger
 * /api/like/{id}:
 *   delete:
 *     summary: 질문 좋아요 삭제
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 좋아요를 삭제할 질문의 ID
 *     responses:
 *       200:
 *         description: 좋아요 삭제 성공
 *       404:
 *         description: 질문을 찾을 수 없음
 *       500:
 *         description: 서버 오류
 */
export const deleteLike = async (req, res) => {
  try {
    const questionId = req.params.id;
    const userId = req.session.user?.id;

    if (!userId) return res.status(401).json({ message: "로그인이 필요합니다." });

    const question = await Question.findById(questionId);
    if (!question) return res.status(404).json({ message: "질문을 찾을 수 없습니다." });

    const userObjectId = new mongoose.Types.ObjectId(userId);

    question.likedBy = question.likedBy.filter(id => !id.equals(userObjectId));
    await question.save();

    res.status(200).json({ message: "좋아요가 삭제되었습니다.", likes: question.likedBy.length });
  } catch (err) {
    console.log("deleteLike error 발생", err);
    res.status(500).json({ message: err.message });
  }
};