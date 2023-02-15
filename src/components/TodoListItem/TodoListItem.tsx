import { useState } from "react";
import { TodoItem } from "~/types/todo";
import { Input } from "~/components/Input";
import { useInput } from "~/hooks/useInput";

interface Props extends TodoItem {
  onDelete: (id: number) => void;
  onUpdate: (item: Partial<TodoItem>) => void;
}

export function TodoListItem({
  id,
  todo,
  isCompleted,
  onDelete,
  onUpdate,
}: Props) {
  const { value, onChange, setValue } = useInput({ initialValue: todo });
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onClick={() => onUpdate({ id, todo, isCompleted: !isCompleted })}
        />
        {editMode ? (
          <Input data-testid="modify-input" value={value} onChange={onChange} />
        ) : (
          <span onClick={() => setEditMode(true)}>{todo}</span>
        )}
      </label>
      {editMode && (
        <>
          <button
            data-testid="submit-button"
            onClick={() => {
              onUpdate({ id, todo: value, isCompleted });
              setEditMode(false);
            }}
          >
            제출
          </button>
          <button
            data-testid="cancel-button"
            onClick={() => setEditMode(false)}
          >
            취소
          </button>
        </>
      )}
      {!editMode && (
        <>
          <button data-testid="modify-button" onClick={() => setEditMode(true)}>
            수정
          </button>
          <button data-testid="delete-button" onClick={() => onDelete(id)}>
            삭제
          </button>
        </>
      )}
    </li>
  );
}
