import { httpClient } from "~/libs/httpClient";
import { TodoItem } from "~/types/todo";

export function createTodo(content: string) {
  return httpClient.post("/todos", { todo: content });
}

export function getTodos() {
  return httpClient.get<TodoItem[]>("/todos");
}

export function updateTodo({ id, todo, isCompleted }: Partial<TodoItem>) {
  return httpClient.put<TodoItem[]>(`/todos/${id}`, { id, todo, isCompleted });
}

export function deleteTodo(id: number) {
  return httpClient.delete(`/todos/${id}`);
}
