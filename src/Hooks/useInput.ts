import { ChangeEvent, useEffect, useState } from "react";

interface UseInputParams {
  validate?: (value: string) => boolean;
  initialValue?: string;
}

export function useInput(params?: UseInputParams) {
  const { validate, initialValue } = params || {};
  const [value, setValue] = useState<string>(initialValue ?? "");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  useEffect(() => {
    if (!validate) return;
    setIsValid(validate(value));
  }, [value, validate]);

  return { isValid, value, onChange: handleChange, setValue };
}
