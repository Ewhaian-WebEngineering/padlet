import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";

const useUserStore = create((set) => ({
  userName: null,
  loading: false,
  error: null,

  // 유저 정보 가져오기
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get("/user/name");
      if(response.username === ""){
        set({ userName: null, error: "세션이 만료되었습니다.", loading: false });
        return;
      }
      set({ userName: response.data.username, loading: false });
    } catch (err) {
      if (err.response?.status === 401) {
        // 세션 만료 → 로그인 필요
        set({ userName: null, error: "세션이 만료되었습니다.", loading: false });
      } else {
        set({ error: err.message, loading: false });
      }
    }
  },
  
  // 로그아웃
  logout: async () => {
    try {
      console.log("ih");
      await axiosInstance.post("/login/logout", {});
    } catch (err) {
      console.error("로그아웃 요청 실패:", err);
    }
    set({ userName: null });
  },
}));

export default useUserStore;