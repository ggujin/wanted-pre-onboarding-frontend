import { FormEvent } from "react";
import { useNavigate, Navigate } from "react-router";
import { FcTodoList } from "react-icons/fc";

import { Input } from "~/components/Input";
import { useInput } from "~/hooks/useInput";
import { httpClient } from "~/libs/httpClient";
import { CenterFormLayout } from "~/layouts/CenterFormLayout";
import { ErrorResponse } from "~/types/api";

import styles from "./Signup.module.scss";
import { isAxiosError } from "axios";

export function Signup() {
  const navigate = useNavigate();

  const {
    value: email,
    onChange: handleEmailChange,
    isValid: isEmailValid,
  } = useInput({ validate: (email) => email.includes("@") });

  const {
    value: password,
    onChange: handlePasswordChange,
    isValid: isPasswordValid,
  } = useInput({ validate: (password) => password.length >= 8 });

  if (localStorage.getItem("access_token")?.length) {
    return <Navigate to="/todo" replace={true} />;
  }

  const isSubmitDisabled = !(isEmailValid && isPasswordValid);

  const handleSubmit = async (e: FormEvent) => {
    if (isSubmitDisabled) return;
    e.preventDefault();
    try {
      const response = await httpClient.post("/auth/signup", {
        email,
        password,
      });

      if (response.status === 201) {
        alert("가입 완료");
        navigate("/signin");
      }
    } catch (err) {
      if (isAxiosError(err) && err.response?.data) {
        alert((err.response.data as ErrorResponse).message);
      }
    }
  };

  return (
    <CenterFormLayout>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.formHeader}>
          <FcTodoList className={styles.icon} />
          회원가입
        </h2>
        <div className={styles.formItem}>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일을 입력해주세요"
            data-testid="email-input"
          />
        </div>
        <div className={styles.formItem}>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력해주세요"
            data-testid="password-input"
          />
        </div>
        <div className={styles.formItem}>
          <button
            className={styles.submit}
            type="submit"
            data-testid="signup-button"
            disabled={isSubmitDisabled}
          >
            가입하기
          </button>
        </div>
      </form>
    </CenterFormLayout>
  );
}
