//question 관련 api 연결 코드
import axiosInstance from "./axiosInstance";

//질문 삭제 api
export const deleteQuestionApi=async(id)=>{
    try{
        const res=await axiosInstance.delete(`/question/${id}`);
        return res.data;
    }catch(error){
        console.error("질문 삭제 실패:", error);
        throw error;
    }
}