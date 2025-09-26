import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./lib/db.js";
import questionRouter from "./routes/question.route.js";
import loginRoutes from "./routes/login.route.js";
import userinfoRoutes from "./routes/userinfo.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());


//로그인 세션을 위한 설정
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
      cookie: {
          secure: false,
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 //24시간동안 유지
      },
  })
);
//swagger
const options = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "이화이언 11월 행사사이트: 질문Padlet",
      version: "1.0.0",
      description: "이 문서는 Padlet api 문서입니다.",
    },
    servers: [
      { url: "http://localhost:5000" } 
    ],
    tags: [
      {
        name: "Questions",
        description: "질문 관련 API (생성, 조회, 수정, 삭제)"
      },]
  },
  apis: ["./controllers/*.js"],
};

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
  optionsSuccessStatus: 200
}));

const specs = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/question",questionRouter);
app.use("/api/login", loginRoutes);
app.use("/api/user", userinfoRoutes);


app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
  connectDB(); //DB 연결
});