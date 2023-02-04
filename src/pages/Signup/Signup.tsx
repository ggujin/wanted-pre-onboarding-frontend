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
        <div>
          <input type="text" name="email" placeholder="이메일을 입력해주세요" />
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
