import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import CardWrapper from "../../../../components/common/Card";
import { memo } from "react";
import type { CardWithBackgroundProps } from "./types";

const CardWithBackground = ({
  id,
  backgroundImg,
  avatarImg,
  badge,
  selected,
  onSelect,
}: CardWithBackgroundProps) => {
  const handleClick = () => {
    onSelect?.(id);
  };

  return (
    <CardWrapper
      className={cn(
        "hover:rounded-[16px] hover:border-black relative",
        selected && "rounded-[16px] border-black",
      )}
      onClick={handleClick}
    >
      <div className="absolute inset-0">
        <img
          src={backgroundImg}
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>
      {avatarImg && (
        <div className="absolute inset-0">
          <img
            src={avatarImg}
            alt="Avatar"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      )}
      <Badge
        className={cn(
          "opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none",
          "absolute top-2 left-2",
          selected && "opacity-100",
        )}
        variant="default"
      >
        {badge}
      </Badge>
    </CardWrapper>
  );
};

export default memo(CardWithBackground);
