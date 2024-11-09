import { useEffect, useState } from "react";

const useTokenValidation = () => {
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 토큰 유효성 검사동안 로딩

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsTokenValid(!!token); // 토큰 존재 여부 저장
    setIsLoading(false); // 토큰 유효성 검사 완료
  }, []);

  return { isTokenValid, isLoading };
};

export default useTokenValidation;
