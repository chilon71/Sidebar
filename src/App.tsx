import "./App.css";
import { Sheet, SheetTrigger } from "@/components/common/Sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button/button-variants";
import BackgroundSelectorSidebar from "@/features/backgroundSelector/components/Sidebar";

function App() {
  return (
    <Sheet>
      <SheetTrigger className={cn(buttonVariants())}>
        Change background
      </SheetTrigger>
      <BackgroundSelectorSidebar />
    </Sheet>
  );
}

export default App;
