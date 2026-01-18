export interface CardWithBackgroundProps {
  id: number;
  backgroundImg: string;
  avatarImg?: string;
  badge: string;
  selected?: boolean;
  onSelect?: (id: number) => void;
}

export interface CardGenerateBackgroundProps {
  progress?: number;
  timeLeft: string;
}
