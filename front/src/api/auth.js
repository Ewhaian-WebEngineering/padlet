import axiosInstance from "./axiosInstance";

export const goKakaologinPage = async () => {
  try {
    const response = await axiosInstance.get("api/login/authorize");
    return response.data.kakaoAuthUrl;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          alert("잘못된 요청입니다.");
          break;
        case 500:
          alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요");
      }
    }
  }
};

export const kakaoLogin = async (code) => {
  try {
    const response = await axiosInstance.get(`/login/kakao-login?code=${code}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          alert("잘못된 요청입니다.");
          break;
        case 500:
          alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요");
          break;
      }
    } else if (error.request) {
      // 서버 응답 자체가 없을 때 (네트워크 오류, CORS 등)
      alert("서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.");
    } else {
      // 기타 오류
      alert("알 수 없는 오류가 발생했습니다.");
    }
    return null;
  }
};
