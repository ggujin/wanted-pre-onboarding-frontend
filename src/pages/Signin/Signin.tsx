import { IoLogInOutline } from "react-icons/io5";

import { CenterFormLayout } from "~/layouts/CenterFormLayout";
import { Input } from "~/components/Input";

import styles from "./Signin.module.scss";

export function Signin() {
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
            placeholder="이메일을 입력해주세요"
            data-testid="email-input"
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            data-testid="password-input"
          />
        </div>
        <div>
          <button
            className={styles.submit}
            type="submit"
            data-testid="signin-button"
          >
            로그인
          </button>
        </div>
      </form>
    </CenterFormLayout>
  );
}
