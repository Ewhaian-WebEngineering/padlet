import express from "express";
import { getAuthorizationCode, kakaoLogin,logout,isLogin } from "../controllers/login.controller.js";
import { requireAuth } from "../middleware/auth.js";

const loginRoutes = express.Router();

loginRoutes.get("/authorize", getAuthorizationCode);
loginRoutes.get("/kakao-login", kakaoLogin);

// login 안 한 사용자가 접근할 경우 401 error
loginRoutes.post("/logout",  logout);
loginRoutes.get("/check-auth", requireAuth, isLogin);

export default loginRoutes;