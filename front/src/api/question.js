import axiosInstance from "./axiosInstance";

export const fetchQuestionById=async(id)=>{
    try{
        const res=await axiosInstance.get(`/question/detail/${id}`);
        return res.data.question;
    }catch(error){
        console.error("질문 불러오기 실패:", error);
        throw error;
    }
}

export const deleteQuestion = async (id) => {
    try {
        const res = await axiosInstance.delete(`/question/${id}`);
        return res.data.id; //id가 넘어옴
    } catch (error) {
        console.error("질문 삭제 api 실패:", error);
        throw error;
    }
}

export const editQuestion = async (id, data) => {
    try {
        const res = await axiosInstance.put(`/question/${id}`, data);
        return res;
    } catch (error) {
        console.error("질문 업데이트 실패", error);
        throw error;
    }
}