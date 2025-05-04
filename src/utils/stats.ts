import { HabitRecord } from '../types';

export const calculateWeeklyTotals = (records: Record<string, HabitRecord>) => {
  const totals = {
    drinks: 0,
    uses: 0
  };

  Object.values(records).forEach(record => {
    totals.drinks += record.drinks;
    totals.uses += record.uses;
  });

  return totals;
};

export const getAverageLevels = (records: Record<string, HabitRecord>) => {
  const sums = {
    stress: 0,
    tiredness: 0,
    hunger: 0,
    physical: 0
  };
  let count = 0;

  Object.values(records).forEach(record => {
    if (record.stressLevel) {
      sums.stress += record.stressLevel;
      sums.tiredness += record.tirednessLevel || 0;
      sums.hunger += record.hungerLevel || 0;
      sums.physical += record.physicalLevel || 0;
      count++;
    }
  });

  return {
    stress: count ? Math.round(sums.stress / count) : 0,
    tiredness: count ? Math.round(sums.tiredness / count) : 0,
    hunger: count ? Math.round(sums.hunger / count) : 0,
    physical: count ? Math.round(sums.physical / count) : 0
  };
};