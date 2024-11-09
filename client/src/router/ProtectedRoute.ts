import { ReactNode, useEffect } from "react";
import useTokenValidation from "../hooks/useTokenValidation";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

// 인증된 사용자만 접속할 수 있는 페이지 (로그인/회원가입 페이지 제외 모든 페이지 - todo 관련 페이지)
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isTokenValid, isLoading } = useTokenValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenValid && !isLoading) {
      navigate("/auth", { replace: true });
    }
  }, [isTokenValid, isLoading, navigate]);

  if (isLoading) return null; // 로딩 중에는 렌더링 X
  return isTokenValid ? children : null; // 토큰 유효해야 TodoLayout 접근 가능
};

export default ProtectedRoute;
