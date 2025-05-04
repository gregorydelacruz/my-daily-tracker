import React, { useState } from 'react';
import { Wine, Snowflake, MessageCircle } from 'lucide-react';
import { DayRecord } from './DayRecord';
import { WeeklyStats } from './WeeklyStats';
import { TriggerStats } from './stats/TriggerStats';
import { useHabitStore } from '../stores/habitStore';
import { WeekNavigation } from './WeekNavigation';

interface WeeklyViewProps {
  onViewChange?: (view: 'chat') => void;
}

export function WeeklyView({ onViewChange }: WeeklyViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const { records } = useHabitStore();
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + (weekOffset * 7));

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleClose = () => {
    setSelectedDate(null);
  };

  const handleWeekChange = (newOffset: number) => {
    setWeekOffset(newOffset);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => onViewChange?.('chat')}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 hover:from-purple-200 hover:to-indigo-200 dark:hover:from-purple-900/50 dark:hover:to-indigo-900/50 rounded-lg transition-all duration-300 mb-6"
      >
        <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
          Chat
        </span>
      </button>

      <WeekNavigation 
        currentWeekOffset={weekOffset}
        onWeekChange={handleWeekChange}
      />

      <div className="grid grid-cols-7 gap-1 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-3 rounded-lg">
        {days.map((day, index) => {
          const date = new Date(startOfWeek);
          date.setDate(startOfWeek.getDate() + index);
          const isToday = date.toDateString() === today.toDateString();
          const dateStr = date.toISOString().split('T')[0];
          const record = records[dateStr] || { drinks: 0, uses: 0 };
          
          return (
            <button
              key={day}
              onClick={() => handleDayClick(date)}
              className={`text-center p-2 rounded-md transition-colors ${
                isToday 
                  ? 'bg-purple-100 dark:bg-purple-900/30' 
                  : 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
              }`}
            >
              <div className="text-xs font-medium text-purple-700 dark:text-purple-300">{day}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {date.getDate()}
              </div>
              <div className="mt-1 space-y-1">
                <div className="flex justify-center items-center">
                  <Wine className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  {record.drinks > 0 && (
                    <span className="ml-1 text-xs font-medium text-purple-600 dark:text-purple-300">
                      {record.drinks}
                    </span>
                  )}
                </div>
                <div className="flex justify-center items-center">
                  <Snowflake className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  {record.uses > 0 && (
                    <span className="ml-1 text-xs font-medium text-blue-600 dark:text-blue-300">
                      {record.uses}
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Tap on any day to update past records</p>
      </div>

      <WeeklyStats weekOffset={weekOffset} />
      <TriggerStats />

      {selectedDate && (
        <DayRecord
          date={selectedDate}
          onClose={handleClose}
        />
      )}
    </div>
  );
}