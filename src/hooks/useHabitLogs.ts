import { useState, useEffect } from 'react';

export interface HabitLog {
  date: string;
  drinking: boolean;
  using: boolean;
}

export function useHabitLogs() {
  const [logs, setLogs] = useState<HabitLog[]>(() => {
    const saved = localStorage.getItem('habitLogs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('habitLogs', JSON.stringify(logs));
  }, [logs]);

  const getStreak = () => {
    const today = new Date().toDateString();
    let streak = 0;
    const sortedLogs = [...logs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    for (const log of sortedLogs) {
      if (!log.drinking && !log.using && 
          new Date(log.date).getTime() >= new Date(today).getTime() - (streak + 1) * 86400000) {
        streak++;
      } else break;
    }
    return streak;
  };

  const toggleHabit = (date: Date, habit: 'drinking' | 'using') => {
    const dateStr = date.toDateString();
    const existingLog = logs.find(log => log.date === dateStr);

    if (existingLog) {
      setLogs(logs.map(log => 
        log.date === dateStr 
          ? { ...log, [habit]: !log[habit] }
          : log
      ));
    } else {
      setLogs([...logs, {
        date: dateStr,
        drinking: habit === 'drinking',
        using: habit === 'using'
      }]);
    }
  };

  const getLogForDate = (date: Date) => {
    return logs.find(log => log.date === date.toDateString()) || { drinking: false, using: false };
  };

  return {
    logs,
    getStreak,
    toggleHabit,
    getLogForDate
  };
}