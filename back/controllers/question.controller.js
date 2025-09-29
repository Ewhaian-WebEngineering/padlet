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
 *               example: "64c1234abc1234abc1234abc"
 *             author:
 *               type: object
 *               description: 작성자 정보
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "64c2345bcd2345bcd2345bcd"
 *                 username:
 *                   type: string
 *                   example: "홍길동"
 *                 email:
 *                   type: string
 *                   example: "hong@test.com"
 *             likedBy:
 *               type: array
 *               description: 좋아요를 누른 사용자 ID 목록
 *               items:
 *                 type: string
 *               example:
 *                 - "64c3456cde3456cde3456cde"
 *                 - "64c4567def4567def4567def"
 *             likes:
 *               type: integer
 *               description: 좋아요 개수
 *               example: 3
 *             liked:
 *               type: boolean
 *               description: 현재 로그인한 사용자가 좋아요 눌렀는지 여부
 *               example: true
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
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 question:
 *                   $ref: '#/components/schemas/QuestionResponse'
 *       500:
 *         description: 서버 오류
 */
export const postQuestion = async (req, res) => {
  try {
    const question = new Question({
      ...req.body,
      author: req.session.user?.id,
    });
    await question.save();
    await question.populate("author", "username email");
    res.status(201).json({ success: true, question });
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 question:
 *                   $ref: '#/components/schemas/QuestionResponse'
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
      return res
        .status(404)
        .json({ success: false, message: "질문이 존재하지 않습니다." });
    }

    if (!doc.author.equals(req.session.user?.id)) {
      return res.status(403).json({ success: false });
    }

    const updated = await Question.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, question: updated });
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 id:
 *                   type: string
 *                   example: "64c1234abc1234abc1234abc"
 *       403:
 *         description: 권한 없음
 *       404:
 *          description: 질문이 존재하지 않음
 *       500:
 *         description: 서버 오류
 */
export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Question.findById(id);

    if (!doc) {
      return res
        .status(404)
        .json({ success: false, message: "질문이 존재하지 않습니다." });
    }

    if (!doc.author.equals(req.session.user?.id)) {
      return res.status(403).json({ success: false });
    }

    await Question.findByIdAndDelete(id);

    res.status(200).json({ success: true, id });
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
 *                  success:
 *                    type: boolean
 *                    example: true
 *                  question:
 *                    _id:
 *                      type: string
 *                    category:
 *                      type: string
 *                    title:
 *                      type: string
 *                    content:
 *                      type: string
 *       404:
 *         description: 질문이 존재하지 않음
 *       500:
 *         description: 서버 오류
 */
export const getQuestionDetail = async (req, res) => {
  try {
    const { id } = req.params;
    // category, title, content만 가져오기
    const question = await Question.findById(id, "category title content");
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "질문이 존재하지 않습니다." });
    }

    res.status(200).json({ success: true, question });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/**
 * @swagger
 * /api/question:
 *   get:
 *     summary: "전체 질문 불러오기"
 *     description: "카테고리별, 정렬 기준(최신순/좋아요순)에 따라 질문 목록을 가져옵니다."
 *     tags: [Questions]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: "질문 카테고리 (예: '강연자1', '강연자2', '전체'). '전체'일 경우 모든 질문 반환"
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [latest, likes]
 *         description: "정렬 기준: latest(최신순, 기본값), likes(좋아요순)"
 *     responses:
 *       200:
 *         description: "질문 목록 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "6714e72fc8f99a001c23b123"
 *                       title:
 *                         type: string
 *                         example: "강연자1에 대한 질문"
 *                       content:
 *                         type: string
 *                         example: "Promise와 async/await 차이점이 궁금합니다."
 *                       category:
 *                         type: string
 *                         example: "강연자1"
 *                       author:
 *                         type: object
 *                         properties:
 *                           username:
 *                             type: string
 *                             example: "홍길동"
 *                           email:
 *                             type: string
 *                             example: "test@ewha.ac.kr"
 *                       likes:
 *                         type: integer
 *                         example: 5
 *                       liked:
 *                         type: boolean
 *                         example: true
 *       500:
 *         description: "서버 오류"
 */
// 전체 질문 읽어오기 (카테고리별 정렬, 최신순/좋아요 정렬)
export const getAllQuestion = async (req, res) => {
  try {
    const userId = req.session.user?.id;

    // 쿼리 파라미터에서 category, order 값 가져오기
    const { category, order } = req.query;

    // 카테고리 조건 만들기
    const filter = {};
    if (category && category !== "전체") {
      filter.category = category;
    }

    // 카테고리에 해당하는 질문 조회
    let docs = await Question.find(filter)
      .populate("author", "username email")
      .lean();

    // 좋아요 개수/로그인 유저 liked 여부 계산
    const questions = docs.map((q) => {
      const likes = Array.isArray(q.likedBy) ? q.likedBy.length : 0;
      const liked = userId
        ? q.likedBy?.some((id) => String(id) === String(userId))
        : false;

      return { ...q, likes, liked };
    });

    // 정렬 기준 적용
    if (order === "likes") {
      // 좋아요 개수 순 정렬
      questions.sort((a, b) => b.likes - a.likes);
    } else {
      // 기본: 최신순
      questions.sort((a, b) => String(b._id).localeCompare(String(a._id)));
    }

    return res.status(200).json({ success: true, questions });
  } catch (err) {
    console.log("getAllQuestion 오류", err);
    return res.status(500).json({ success: false, message: err.message });
  }
};
