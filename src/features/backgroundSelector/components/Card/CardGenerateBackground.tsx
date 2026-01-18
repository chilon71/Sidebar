import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import CardWrapper from "../../../../components/common/Card";

export default function CardGenerateBackground({
  progress = 0,
  timeLeft = '',
}: {
  progress?: number;
  timeLeft: string;
}) {
  return (
    <CardWrapper className="bg-black">
      <div className="relative h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircularProgressbarWithChildren
            value={progress}
            styles={buildStyles({
              rotation: 0,
              pathColor: `#5BF0A5`,
              trailColor: "rgba(255, 255, 255, 0.2)",
            })}
            className="w-16.25 h-16.25 "
          >
            <div className="text-white text-sm font-italian-plate-medium">
              {progress}%
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="absolute bottom-3.25 text-center w-full leading-none">
          <span className="text-white font-italian-plate-demibold text-[12px]">{timeLeft}</span>
        </div>
      </div>
    </CardWrapper>
  );
}
