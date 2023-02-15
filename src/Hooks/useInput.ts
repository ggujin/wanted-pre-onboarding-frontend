import { ChangeEvent, useEffect, useState } from "react";

interface UseInputParams {
  validate?: (value: string) => boolean;
}

export function useInput({ validate }: UseInputParams) {
  const [value, setValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  useEffect(() => {
    if (!validate) return;
    setIsValid(validate(value));
  }, [value, validate]);

  return { isValid, value, onChange: handleChange };
}
