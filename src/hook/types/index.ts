export type UseHistoryInputReturn = {
  inputValue: string;
  setHistoryValue: (value: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};


export type UseRandomItemReturn = {
  item: string;
  getRandomItem: () => string;
}