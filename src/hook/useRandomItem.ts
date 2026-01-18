import { useCallback, useState } from "react";
import type { UseRandomItemReturn } from "./types";

export function useRandomItem(items: string[]):UseRandomItemReturn {
  const [item, setItem] = useState<string>(() => {
    return items[Math.floor(Math.random() * items.length)];
  });

  const getRandomItem = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    setItem(randomItem);
    return randomItem;
  }, [items]);

  return {
    item,
    getRandomItem,
  };
}
