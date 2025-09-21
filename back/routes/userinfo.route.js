import express from "express";
import {getName} from "../controllers/userinfo.controller.js";

const userinfoRoutes = express.Router();

userinfoRoutes.get("/name", getName);
export default userinfoRoutes;