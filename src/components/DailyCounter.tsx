import React from 'react';
import { Wine, Snowflake, MessageCircle } from 'lucide-react';
import { useHabitStore } from '../stores/habitStore';
import { DailyLevels } from './levels/DailyLevels';
import { Counter } from './Counter';

interface DailyCounterProps {
  onUseIncrement: () => void;
  onViewChange?: (view: 'chat') => void;
}

export function DailyCounter({ onUseIncrement, onViewChange }: DailyCounterProps) {
  const { records, updateRecord } = useHabitStore();
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const record = records[dateStr] || { drinks: 0, uses: 0 };

  const handleUpdate = (type: 'drinks' | 'uses', increment: boolean) => {
    const value = record[type];
    updateRecord(dateStr, {
      ...record,
      [type]: increment ? value + 1 : Math.max(0, value - 1)
    });
    
    if (type === 'uses' && increment) {
      onUseIncrement();
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 transition-colors">
        <h2 className="text-sm font-medium text-purple-600 dark:text-purple-300 mb-1">Today's Date</h2>
        <p className="text-lg font-bold text-purple-800 dark:text-purple-100">
          {today.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <button
        onClick={() => onViewChange?.('chat')}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 hover:from-purple-200 hover:to-indigo-200 dark:hover:from-purple-900/50 dark:hover:to-indigo-900/50 rounded-lg transition-all duration-300 mb-6"
      >
        <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
          Chat
        </span>
      </button>
      
      <Counter
        label="Drinks Today"
        count={record.drinks}
        onIncrement={() => handleUpdate('drinks', true)}
        onDecrement={() => handleUpdate('drinks', false)}
        Icon={Wine}
      />
      
      <Counter
        label="Uses Today"
        count={record.uses}
        onIncrement={() => handleUpdate('uses', true)}
        onDecrement={() => handleUpdate('uses', false)}
        Icon={Snowflake}
      />

      <DailyLevels />
    </div>
  );
}