import React, { useState } from 'react';
import { getDaysOfWeek } from '../utils/dates';
import { useHabitLogs } from '../hooks/useHabitLogs';
import { Title } from './Title';
import { DailyQuote } from './DailyQuote';
import { StreakCounter } from './StreakCounter';
import { WeeklyView } from './WeeklyView';
import { Legend } from './Legend';

function HabitDashboard() {
  const [weekOffset, setWeekOffset] = useState(0);
  const { getStreak, toggleHabit, getLogForDate } = useHabitLogs();
  const daysOfWeek = getDaysOfWeek(weekOffset);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 px-1 py-4">
      <div className="max-w-[360px] mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-2 mb-6">
          <Title />
          <DailyQuote />
          <StreakCounter streak={getStreak()} />
          
          <WeeklyView
            weekOffset={weekOffset}
            onWeekChange={setWeekOffset}
            days={daysOfWeek}
            getLogForDate={getLogForDate}
            onToggleHabit={toggleHabit}
          />

          <Legend />
        </div>
      </div>
    </div>
  );
}

export default HabitDashboard;