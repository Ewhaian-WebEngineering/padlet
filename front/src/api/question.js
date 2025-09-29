import axiosInstance from "./axiosInstance";

export const fetchQuestionById=async(id)=>{
    try{
        const res=await axiosInstance.get(`/api/question/detail/${id}`);
        return res.data;
    }catch(error){
        console.error("질문 불러오기 실패:", error);
        throw error;
    }
}