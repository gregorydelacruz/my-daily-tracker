import React from 'react';
import { Wine, Snowflake } from 'lucide-react';
import { HabitButton } from './HabitButton';

interface DayCardProps {
  date: Date;
  dayName: string;
  dayDate: string;
  isToday: boolean;
  log: { drinking: boolean; using: boolean };
  onToggleHabit: (date: Date, habit: 'drinking' | 'using') => void;
}

export function DayCard({ date, dayName, dayDate, isToday, log, onToggleHabit }: DayCardProps) {
  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

  return (
    <div 
      className={`text-center p-1.5 rounded-lg transition-all w-full ${
        isToday 
          ? 'bg-gradient-to-br from-purple-100 to-blue-100 ring-1 ring-purple-200' 
          : isPast
          ? 'bg-white/60'
          : 'bg-white/80'
      }`}
    >
      <div className={`text-[11px] font-medium ${isToday ? 'text-purple-700' : 'text-gray-600'}`}>
        {dayName}
      </div>
      <div className="text-[9px] text-gray-500 mb-1">{dayDate}</div>
      
      <div className="space-y-1">
        <HabitButton
          isActive={log.drinking}
          onClick={() => onToggleHabit(date, 'drinking')}
          Icon={Wine}
        />
        
        <HabitButton
          isActive={log.using}
          onClick={() => onToggleHabit(date, 'using')}
          Icon={Snowflake}
        />
      </div>
    </div>
  );
}