import Question from "../models/question.model.js";
/**
 * @swagger
 * components:
 *   schemas:
 *     QuestionRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: 질문 제목
 *           example: "강연자1에 관한 질문"
 *         content:
 *           type: string
 *           description: 질문 본문 내용
 *           example: "Promise와 async/await 차이점이 궁금합니다."
 *         category:
 *           type: string
 *           description: 카테고리
 *           example: "강연자1"
 *         anonymity:
 *           type: boolean
 *           description: 익명 여부
 *           example: true
 *       required:
 *         - title
 *         - content
 *         - category
 *         - anonymity
 *     QuestionResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/QuestionRequest'
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: 질문의 고유 ID (ObjectId)
 *               example: 64c1234abc1234abc1234abc
 *             author:
 *               type: string
 *               description: 작성자 User의 ObjectId (User ref)
 *               example: 64c2345bcd2345bcd2345bcd
 *             likedBy:
 *               type: array
 *               description: 좋아요를 누른 사용자 ObjectId 목록
 *               items:
 *                 type: string
 *               example:
 *                 - 64c3456cde3456cde3456cde
 *                 - 64c4567def4567def4567def
 *             createdAt:
 *               type: string
 *               format: date-time
 *               description: 작성 시각
 *               example: "2025-09-10T09:30:00.000Z"
 */

/**
 * @swagger
 * /api/question:
 *   post:
 *     summary: 새로운 질문 등록
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QuestionRequest'
 *     responses:
 *       201:
 *         description: 질문 생성 성공
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuestionResponse'
 *       500:
 *         description: 서버 오류
 */
export const postQuestion = async (req, res) => {
    try {
        const question = new Question({ ...req.body, author: req.session.user?.id });
        await question.save();
        res.status(201).json({ success: true });
  } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
  }
};

/**
 * @swagger
 * /api/question/{id}:
 *   put:
 *     summary: 질문 수정 (작성자 본인만)
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QuestionRequest'
 *     responses:
 *       200:
 *         description: 수정 성공
 *       403:
 *         description: 권한 없음
 *       500:
 *         description: 서버 오류
 */
export const editQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Question.findById(id);

    if (!doc) {
      return res.status(404).json({ success: false, message: "질문이 존재하지 않습니다." });
    }

    if (!doc.author.equals(req.session.user?.id)) {
      return res.status(403).json({ success: false });
    }

    await Question.findByIdAndUpdate(id, req.body);
    res.status(200).json({ success: true });
  } catch (err) {
        console.log("editQuestion error 발생", err);
        res.status(500).json({ success: false });
  }
};

/**
 * @swagger
 * /api/question/{id}:
 *   delete:
 *     summary: 질문 삭제 (작성자 본인만)
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 삭제 성공
 *       403:
 *         description: 권한 없음
 *       500:
 *         description: 서버 오류
 */
export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Question.findById(id);

    if (!doc) {
      return res.status(404).json({ success: false, message: "질문이 존재하지 않습니다." });
    }

    if (!doc.author.equals(req.session.user?.id)) {
      return res.status(403).json({ success: false });
    }

    await Question.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  } catch (err) {
        console.log("deleteQuestion error 발생", err);
        res.status(500).json({ success: false });
  }
};

/**
 * @swagger
 * /api/question/{id}:
 *   get:
 *     summary: 특정 질문 조회
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuestionResponse'
 *       404:
 *         description: 질문 없음
 *       500:
 *         description: 서버 오류
 */
export const getQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Question.findById(id);

    if (!doc) {
      return res.status(404).json({ success: false });
    }

    res.status(200).json({ success: true, question: doc });
  } catch (err) {
    console.log("getQuestion error 발생", err);
    res.status(500).json({ success: false });
  }
};


/**
 * @swagger
 * /api/question/detail/{id}:
 *   get:
 *     summary: 질문 상세 불러오기
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 조회할 질문의 ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 질문 상세 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 category:
 *                   type: string
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       404:
 *         description: 질문이 존재하지 않음
 *       500:
 *         description: 서버 오류
 */
export const getQuestionDetail = async(req, res) => {
  try {
    const{ id } = req.params;
    // category, title, content만 가져오기
    const question = await Question.findById(id, 'category title content');
    if (!question) {
      return res.status(404).json({ success: false, message: "질문이 존재하지 않습니다." });
    }
    res.json(question);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};