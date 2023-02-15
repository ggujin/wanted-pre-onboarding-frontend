import { useCallback, FormEvent } from "react";
import { createTodo } from "~/apis/todo";

import { Input } from "~/components/Input";

import { useInput } from "~/hooks/useInput";
import styles from "./TodoInputForm.module.scss";

interface Props {
  onSubmit: () => Promise<void>;
}

export function TodoInputForm({ onSubmit }: Props) {
  const { value, onChange, setValue } = useInput();

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        await createTodo(value);
        onSubmit();
        setValue("");
      } catch {}
    },
    [value]
  );
  return (
    <form className={styles.todoInputForm} onSubmit={handleSubmit}>
      <Input
        data-testid="new-todo-input"
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력해주세요"
      />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
}
