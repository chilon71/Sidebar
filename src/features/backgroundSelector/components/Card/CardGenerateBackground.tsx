import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import CardWrapper from "../../../../components/common/Card";
import type { CardGenerateBackgroundProps } from "./types";
import { useEffect, useState } from "react";

export default function CardGenerateBackground({
  progress = 0,
  timeLeft = "",
}: CardGenerateBackgroundProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedValue(progress);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <CardWrapper className="bg-black">
      <div className="relative h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircularProgressbarWithChildren
            value={animatedValue}
            styles={buildStyles({
              rotation: 0,
              pathColor: `#5BF0A5`,
              trailColor: "rgba(255, 255, 255, 0.2)",
              pathTransition: "stroke-dashoffset 1s ease",
            })}
            className="w-16.25 h-16.25 "
          >
            <div className="text-white text-sm font-italian-plate-medium">
              {progress}%
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="absolute bottom-3.25 text-center w-full leading-none">
          <span className="text-white font-italian-plate-demibold text-[12px]">
            {timeLeft}
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}
