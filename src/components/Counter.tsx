import React from 'react';
import { Plus, Minus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CounterProps {
  label: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  Icon: LucideIcon;
}

export function Counter({ label, count, onIncrement, onDecrement, Icon }: CounterProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50/95 via-pink-50/95 to-indigo-50/95 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 shadow-lg shadow-purple-100/30 hover:shadow-purple-200/40 dark:shadow-none border border-purple-100/30 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-purple-600/90 dark:text-purple-300" />
          <span className="text-sm font-medium bg-gradient-to-r from-purple-700 to-indigo-600 dark:from-purple-200 dark:to-purple-200 bg-clip-text text-transparent">{label}</span>
        </div>
        <span className="text-xl font-bold bg-gradient-to-br from-purple-700 to-indigo-600 dark:from-purple-100 dark:to-purple-100 bg-clip-text text-transparent">{count}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onDecrement}
          className="flex-1 flex items-center justify-center gap-1 bg-red-100/90 hover:bg-red-200/90 dark:bg-red-500/20 dark:hover:bg-red-500/30 text-red-600 dark:text-red-200 rounded-md py-2.5 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-red-100/30 dark:shadow-none"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          onClick={onIncrement}
          className="flex-1 flex items-center justify-center gap-1 bg-green-100/90 hover:bg-green-200/90 dark:bg-green-500/20 dark:hover:bg-green-500/30 text-green-600 dark:text-green-200 rounded-md py-2.5 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-green-100/30 dark:shadow-none"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}