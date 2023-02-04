import { FcTodoList } from "react-icons/fc";
import styles from "./Signup.module.scss";

export function Signup() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h2 className={styles.formHeader}>
          <FcTodoList className={styles.icon} />
          회원가입
        </h2>
        <div className={styles.formItem}>
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요"
            data-testid="email-input"
          />
        </div>
        <div className={styles.formItem}>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            data-testid="password-input"
          />
        </div>
        <div className={styles.formItem}>
          <button
            className={styles.submit}
            type="submit"
            data-testid="signup-button"
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
