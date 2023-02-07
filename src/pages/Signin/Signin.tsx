import { IoLogInOutline } from "react-icons/io5";

import { CenterFormLayout } from "~/layouts/CenterFormLayout";
import { Input } from "~/components/Input";
import { useInput } from "~/Hooks/useInput";

import styles from "./Signin.module.scss";

export function Signin() {
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
  return (
    <CenterFormLayout>
      <form>
        <h2 className={styles.formHeader}>
          <IoLogInOutline className={styles.icon} />
          로그인
        </h2>
        <div>
          <Input
            type="text"
            name="email"
            value={email}
            placeholder="이메일을 입력해주세요"
            onChange={handleEmailChange}
            data-testid="email-input"
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={handlePasswordChange}
            data-testid="password-input"
          />
        </div>
        <div>
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
