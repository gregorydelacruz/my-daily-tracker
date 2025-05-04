import React from 'react';
import { Calendar, BarChart3, ClipboardList } from 'lucide-react';

interface NavProps {
  activeView: 'daily' | 'weekly' | 'trigger' | 'summary' | 'chat';
  onViewChange: (view: 'daily' | 'weekly' | 'trigger' | 'summary' | 'chat') => void;
}

export function Navigation({ activeView, onViewChange }: NavProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onViewChange('daily')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
          activeView === 'daily'
            ? 'bg-gradient-to-r from-purple-100/90 to-indigo-100/90 dark:from-purple-500/30 dark:to-indigo-500/30 text-purple-700 dark:text-purple-100 shadow-sm shadow-purple-100/30 dark:shadow-none'
            : 'text-gray-600 dark:text-gray-300 hover:bg-purple-50/80 dark:hover:bg-purple-500/20'
        }`}
      >
        <BarChart3 className="w-4 h-4" />
        <span className="text-sm font-medium">Today</span>
      </button>
      <button
        onClick={() => onViewChange('weekly')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
          activeView === 'weekly'
            ? 'bg-gradient-to-r from-purple-100/90 to-indigo-100/90 dark:from-purple-500/30 dark:to-indigo-500/30 text-purple-700 dark:text-purple-100 shadow-sm shadow-purple-100/30 dark:shadow-none'
            : 'text-gray-600 dark:text-gray-300 hover:bg-purple-50/80 dark:hover:bg-purple-500/20'
        }`}
      >
        <Calendar className="w-4 h-4" />
        <span className="text-sm font-medium">Weekly</span>
      </button>
      <button
        onClick={() => onViewChange('summary')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
          activeView === 'summary'
            ? 'bg-gradient-to-r from-purple-100/90 to-indigo-100/90 dark:from-purple-500/30 dark:to-indigo-500/30 text-purple-700 dark:text-purple-100 shadow-sm shadow-purple-100/30 dark:shadow-none'
            : 'text-gray-600 dark:text-gray-300 hover:bg-purple-50/80 dark:hover:bg-purple-500/20'
        }`}
      >
        <ClipboardList className="w-4 h-4" />
        <span className="text-sm font-medium">Summary</span>
      </button>
    </div>
  );
}