import { ReactNode, useEffect } from "react";
import useTokenValidation from "../hooks/useTokenValidation";
import { useNavigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
}

// 로그인/회원가입 페이지
const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isTokenValid, isLoading } = useTokenValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenValid && !isLoading) {
      navigate("/", { replace: true });
    }
  }, [isTokenValid, navigate, isLoading]);

  if (isLoading) return null; // 로딩 중에는 렌더링 X
  return isTokenValid ? null : children; // 토큰 없거나 유효하지 않을 때 AuthLayout 접근 가능
};

export default PublicRoute;
