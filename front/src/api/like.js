import axiosInstance from "./axiosInstance";

export const postLike = async (questionId) => {
    try {
        const res = await axiosInstance.post("/like", { questionId });
        return res.data;
    } catch (error) {
        console.error("좋아요 추가 실패:", error);
        throw error;
    }
}

export const deleteLike = async (questionId) => {
    try {
        const res = await axiosInstance.delete(`/like/${questionId}`);
        return res.data;
    } catch (error) {
        console.error("좋아요 삭제 실패:", error);
        throw error;
    }
}