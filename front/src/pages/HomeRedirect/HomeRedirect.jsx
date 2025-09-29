import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserStore";

function HomeRedirect() {
  const { userName, loading } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // 아직 fetchUser 중이면 대기

    if (userName) {
      navigate("/event-info", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [userName, loading, navigate]);

  if (loading) {
    return;
  }

  return null;
}

export default HomeRedirect;
