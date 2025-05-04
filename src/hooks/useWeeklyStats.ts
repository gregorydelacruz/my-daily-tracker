import { useHabitStore } from './useHabitStore';
import { getWeekDates } from '../utils/date';
import { calculateWeeklyTotals, getAverageLevels } from '../utils/stats';

export const useWeeklyStats = (weekOffset = 0) => {
  const { records } = useHabitStore();
  const dates = getWeekDates(weekOffset);
  
  const weeklyRecords = dates.reduce((acc, date) => {
    const dateStr = date.toISOString().split('T')[0];
    if (records[dateStr]) {
      acc[dateStr] = records[dateStr];
    }
    return acc;
  }, {} as Record<string, any>);

  const totals = calculateWeeklyTotals(weeklyRecords);
  const averages = getAverageLevels(weeklyRecords);

  return {
    dates,
    records: weeklyRecords,
    totals,
    averages
  };
};