import React from 'react';
import { Wine, Snowflake, Plus, Minus, X } from 'lucide-react';
import { useHabitStore } from '../stores/habitStore';

interface DayRecordProps {
  date: Date;
  onClose: () => void;
}

export function DayRecord({ date, onClose }: DayRecordProps) {
  const { records, updateRecord } = useHabitStore();
  const dateStr = date.toISOString().split('T')[0];
  const record = records[dateStr] || { drinks: 0, uses: 0 };

  const handleUpdate = (type: 'drinks' | 'uses', increment: boolean) => {
    const value = record[type];
    updateRecord(dateStr, {
      ...record,
      [type]: increment ? value + 1 : Math.max(0, value - 1)
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-[90%] max-w-[300px] relative">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 p-1 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-semibold text-purple-800 mb-4 text-center">
          {date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })}
        </h3>

        <div className="space-y-4">
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Wine className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Drinks</span>
              </div>
              <span className="text-lg font-bold text-purple-800">{record.drinks}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate('drinks', false)}
                className="flex-1 flex items-center justify-center gap-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-md py-2 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleUpdate('drinks', true)}
                className="flex-1 flex items-center justify-center gap-1 bg-green-100 hover:bg-green-200 text-green-600 rounded-md py-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Uses</span>
              </div>
              <span className="text-lg font-bold text-blue-800">{record.uses}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate('uses', false)}
                className="flex-1 flex items-center justify-center gap-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-md py-2 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleUpdate('uses', true)}
                className="flex-1 flex items-center justify-center gap-1 bg-green-100 hover:bg-green-200 text-green-600 rounded-md py-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}