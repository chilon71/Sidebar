import { useCallback, useState } from "react";

export function useHistoryInput(initialValue = "") {
  const [history, setHistory] = useState<string[]>([initialValue]);
  const [index, setIndex] = useState(0);

  const value = history[index];

  const setHistoryValue = useCallback(
    (newValue: string) => {
      setHistory((prev) => {
        const next = prev.slice(0, index + 1);
        next.push(newValue);
        return next;
      });
      setIndex((prev) => prev + 1);
    },
    [index],
  );

  const undo = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const redo = useCallback(() => {
    setIndex((i) => Math.min(i + 1, history.length - 1));
  }, [history.length]);

  return {
    inputValue: value,
    setHistoryValue,
    undo,
    redo,
    canUndo: index > 0,
    canRedo: index < history.length - 1,
  };
}
