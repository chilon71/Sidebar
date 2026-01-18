export interface CardGenerateBackgroundProps {
  id: number | string;
  backgroundImg: string;
  avatarImg?: string;
  badge: string;
  selected?: boolean;
  onSelect?: (id?: number | string) => void;
}
