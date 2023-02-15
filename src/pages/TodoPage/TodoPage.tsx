import { CenterFormLayout } from "~/layouts/CenterFormLayout";
import { useCallback, useEffect, useState } from "react";
import { TodoInputForm } from "~/components/TodoInputForm";
import { TodoList } from "~/components/TodoList";

import { getTodos } from "~/apis/todo";
import { TodoItem } from "~/types/todo";

import styles from "./TodoPage.module.scss";

export function TodoPage() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const fetchTodos = useCallback(async () => {
    const response = await getTodos();
    setTodos(response.data);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <CenterFormLayout>
      <h1 className={styles.header}>할 일 목록</h1>
      <TodoInputForm onSubmit={fetchTodos} />
      <TodoList items={todos} refetch={fetchTodos} />
    </CenterFormLayout>
  );
}
