import { useHabitStore } from '../stores/habitStore';
import { formatDate } from '../utils/date';
import { HabitRecord } from '../types';

export const useDailyRecord = (date: Date = new Date()) => {
  const { records, updateRecord } = useHabitStore();
  const dateStr = formatDate(date);
  const record = records[dateStr] || { 
    drinks: 0, 
    uses: 0,
    stressLevel: 5,
    tirednessLevel: 5,
    hungerLevel: 5,
    physicalLevel: 5
  };

  const updateValue = <K extends keyof HabitRecord>(
    key: K, 
    value: HabitRecord[K]
  ) => {
    updateRecord(dateStr, {
      ...record,
      [key]: value
    });
  };

  return {
    record,
    updateValue
  };
};