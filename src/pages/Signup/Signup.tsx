import { useState, ChangeEvent, useEffect } from "react";
import { FcTodoList } from "react-icons/fc";

import { Input } from "../../components/Input";
import { useInput } from "../../Hooks/useInput";

import styles from "./Signup.module.scss";

export function Signup() {
  const {
    value: email,
    onChange: handleEmailChange,
    isValid: isEmailValid,
  } = useInput({ validate: (email) => email.includes("@") });

  const {
    value: password,
    onChange: handlePasswordChange,
    isValid: isPasswordValid,
  } = useInput({ validate: (password) => password.length > 8 });

  const isSubmitDisabled = !(isEmailValid && isPasswordValid);

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
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
