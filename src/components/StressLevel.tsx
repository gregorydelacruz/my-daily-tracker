import React from 'react';
import { Brain } from 'lucide-react';

interface StressLevelProps {
  value: number;
  onChange: (value: number) => void;
}

export function StressLevel({ value, onChange }: StressLevelProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 shadow-sm transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <Brain className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
          Stress Level Today
        </span>
      </div>
      
      <div className="space-y-3">
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-purple-200 dark:bg-purple-900/30 rounded-lg appearance-none cursor-pointer accent-purple-600 dark:accent-purple-400"
        />
        
        <div className="flex justify-between px-1">
          <span className="text-xs text-purple-600 dark:text-purple-300">Low</span>
          <span className="text-lg font-bold text-purple-800 dark:text-purple-100">{value}</span>
          <span className="text-xs text-purple-600 dark:text-purple-300">High</span>
        </div>
        
        <div className="flex justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <button
              key={num}
              onClick={() => onChange(num)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                value === num
                  ? 'bg-purple-600 dark:bg-purple-500 text-white'
                  : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}