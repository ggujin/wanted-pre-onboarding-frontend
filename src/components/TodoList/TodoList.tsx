import { useCallback } from "react";
import { TodoItem } from "~/types/todo";

import { deleteTodo, updateTodo } from "~/apis/todo";
import { TodoListItem } from "~/components/TodoListItem";

interface Props {
  items: TodoItem[];
  refetch: () => Promise<void>;
}

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(1), ms));

export function TodoList({ items, refetch }: Props) {
  const handleDelete = useCallback(async (id: number) => {
    await deleteTodo(id);
    await delay(500);
    refetch();
  }, []);

  const handleUpdate = useCallback(async (item: Partial<TodoItem>) => {
    await updateTodo(item);
    await delay(500);
    refetch();
  }, []);

  return (
    <ul>
      {items.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
}
