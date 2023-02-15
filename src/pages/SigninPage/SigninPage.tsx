import { FormEvent } from "react";
import { useNavigate, Navigate } from "react-router";
import { IoLogInOutline } from "react-icons/io5";

import { ErrorResponse } from "~/types/api";
import { httpClient } from "~/libs/httpClient";
import { CenterFormLayout } from "~/layouts/CenterFormLayout";
import { Input } from "~/components/Input";
import { useInput } from "~/hooks/useInput";

import styles from "./Signin.module.scss";
import { isAxiosError } from "axios";

export function SigninPage() {
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

  const isSubmitDisabled = !(isEmailValid && isPasswordValid);

  const handleSubmit = async (e: FormEvent) => {
    if (isSubmitDisabled) return;
    e.preventDefault();
    try {
      const response = await httpClient.post("/auth/signin", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.access_token;
        localStorage.setItem("accessToken", token);
        alert("로그인 성공");
        navigate("/todo");
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
          <IoLogInOutline className={styles.icon} />
          로그인
        </h2>
        <div className={styles.formItem}>
          <Input
            type="text"
            name="email"
            value={email}
            placeholder="이메일을 입력해주세요"
            onChange={handleEmailChange}
            data-testid="email-input"
          />
        </div>
        <div className={styles.formItem}>
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={handlePasswordChange}
            data-testid="password-input"
          />
        </div>
        <div className={styles.formItem}>
          <button
            className={styles.submit}
            type="submit"
            disabled={isSubmitDisabled}
            data-testid="signin-button"
          >
            로그인
          </button>
        </div>
      </form>
    </CenterFormLayout>
  );
}
