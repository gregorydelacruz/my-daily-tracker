import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WeekNavigationProps {
  currentWeekOffset: number;
  onWeekChange: (offset: number) => void;
}

export function WeekNavigation({ currentWeekOffset, onWeekChange }: WeekNavigationProps) {
  const formatWeekLabel = (offset: number) => {
    if (offset === 0) return 'Current Week';
    if (offset === -1) return 'Last Week';
    if (offset < 0) return `${Math.abs(offset)} Weeks Ago`;
    return `${offset} Week${offset !== 1 ? 's' : ''} Ahead`;
  };

  return (
    <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-3 rounded-lg">
      <button
        onClick={() => onWeekChange(currentWeekOffset - 1)}
        className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-600 dark:text-purple-300 transition-colors"
        aria-label="Previous week"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
        {formatWeekLabel(currentWeekOffset)}
      </span>
      
      <button
        onClick={() => onWeekChange(currentWeekOffset + 1)}
        className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-600 dark:text-purple-300 transition-colors"
        aria-label="Next week"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}