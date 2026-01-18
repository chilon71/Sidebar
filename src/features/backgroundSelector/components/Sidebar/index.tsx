import { ScrollArea, ScrollBar } from "@/components/common/ScrollArea";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/common/Sheet";
import { useHistoryInput } from "@/hook/useHistoryInput";
import { useState } from "react";
import aiIcon from "/assets/img/AI.svg";
import { Button } from "@/components/ui/Button";
import { CardWithBackground, CardGenerateBackground } from "../Card";
import backgroundData from "@/features/backgroundSelector/mock/background-data.json";
import PromptInput from "@/components/common/PromtInput";

export default function BackgroundSelectorSidebar() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { inputValue, setHistoryValue, undo, redo, canUndo, canRedo } =
    useHistoryInput("");
  return (
    <SheetContent className="py-8 gap-6 w-full md:w-100 sm:max-w-none">
      <SheetHeader className="p-0 px-5">
        <SheetTitle className="text-[22px] leading-[1.2] font-italian-plate-bold">
          Change background
        </SheetTitle>
      </SheetHeader>
      <ScrollArea className="h-full">
        <div className="flex flex-col pb-10 px-5">
          <h3 className="text-sm font-italian-plate-demibold mb-3">
            Background idea
          </h3>
          <PromptInput
            inputValue={inputValue}
            setHistoryValue={setHistoryValue}
            undo={undo}
            redo={redo}
            canUndo={canUndo}
            canRedo={canRedo}
          />
          <Button className="h-12 rounded-full font-italian-plate-medium mb-10">
            <img src={aiIcon} alt="Generate button" />
            Generate BG for 1 credit
          </Button>
          <h3 className="text-sm font-italian-plate-demibold mb-2.5">
            Your backgrounds
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <CardGenerateBackground progress={25} timeLeft="1 minute left" />
            {backgroundData?.data.map((idea) => (
              <CardWithBackground
                {...idea}
                key={idea.id}
                selected={selectedId === idea.id}
                onSelect={() => setSelectedId(idea.id)}
              />
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </SheetContent>
  );
}
