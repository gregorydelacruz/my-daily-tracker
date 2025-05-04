import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WeekNavigatorProps {
  weekOffset: number;
  onWeekChange: (offset: number) => void;
}

export function WeekNavigator({ weekOffset, onWeekChange }: WeekNavigatorProps) {
  return (
    <div className="flex items-center justify-between mb-6 px-4">
      <button
        onClick={() => onWeekChange(weekOffset - 1)}
        className="p-2 rounded-full hover:bg-purple-100 text-purple-600 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <span className="font-medium text-purple-800">
        {weekOffset === 0 ? 'Current Week' : 
         weekOffset > 0 ? `${weekOffset} Week${weekOffset !== 1 ? 's' : ''} Ahead` :
         `${Math.abs(weekOffset)} Week${weekOffset !== -1 ? 's' : ''} Ago`}
      </span>
      
      <button
        onClick={() => onWeekChange(weekOffset + 1)}
        className="p-2 rounded-full hover:bg-purple-100 text-purple-600 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}