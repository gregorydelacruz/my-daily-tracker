export interface Level {
  value: number;
  onChange: (value: number) => void;
  label: string;
  icon: React.ElementType;
}

export interface DailyLevels {
  stressLevel: number;
  tirednessLevel: number;
  hungerLevel: number;
  physicalLevel: number;
}