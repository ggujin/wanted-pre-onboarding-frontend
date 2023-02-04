import { FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { FcTodoList } from "react-icons/fc";

import { Input } from "../../components/Input";
import { useInput } from "../../Hooks/useInput";

import styles from "./Signup.module.scss";

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

  const isSubmitDisabled = !(isEmailValid && isPasswordValid);

  const handleSubmit = async (e: FormEvent) => {
    if (isSubmitDisabled) return;
    e.preventDefault();
    try {
      const response = await axios.post("/auth/signup", {
        email,
        password,
      });

      if (response.status === 201) {
        alert("가입 완료");
        navigate("/signin");
      }
    } catch (err) {}
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
    </div>
  );
}
