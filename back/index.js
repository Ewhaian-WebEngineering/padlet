import express from "express";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());


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
  },
  apis: ["./controllers/*.js"],
};


const specs = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});