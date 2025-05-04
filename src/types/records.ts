import { TriggerType } from './triggers';

export interface HabitRecord {
  drinks: number;
  uses: number;
  stressLevel?: number;
  tirednessLevel?: number;
  hungerLevel?: number;
  physicalLevel?: number;
  trigger?: TriggerType;
}

export interface DailyRecord {
  date: string;
  record: HabitRecord;
}