import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/InputGroup";
import { useRandomItem } from "@/hook/useRandomItem";
import actionArrow from "/assets/img/action_arrow.svg";
import generate from "/assets/img/generate.svg";
import data from "@/features/backgroundSelector/mock/random-text.json";

export default function PromptInput({
  inputValue,
  setHistoryValue,
  undo,
  redo,
  canUndo,
  canRedo,
}: {
  inputValue: string;
  setHistoryValue: (value: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}) {
  const { getRandomItem } = useRandomItem(data?.phrases || []);
  return (
    <InputGroup className="min-h-48.75 mb-6">
      <InputGroupTextarea
        className="text-sm font-italian-plate-medium"
        placeholder="Describe your background idea..."
        value={inputValue}
        onChange={(e) => setHistoryValue(e.target.value)}
      />
      <InputGroupAddon align="block-end">
        <InputGroupButton
          className="cursor-pointer bg-transparent"
          variant={"secondary"}
          onClick={() => setHistoryValue(getRandomItem())}
        >
          <img src={generate} alt="Back button" />
          <span className="text-sm font-italian-plate-medium">Regenerate</span>
        </InputGroupButton>
        <InputGroupButton
          className="ml-auto cursor-pointer"
          onClick={undo}
          disabled={!canUndo}
        >
          <img
            src={actionArrow}
            alt="Undo button"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </InputGroupButton>
        <InputGroupButton
          className="cursor-pointer scale-x-[-1]"
          onClick={redo}
          disabled={!canRedo}
        >
          <img
            src={actionArrow}
            alt="Redo button"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
