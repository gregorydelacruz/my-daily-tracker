import React from 'react';
import { Trophy } from 'lucide-react';

interface StreakCounterProps {
  streak: number;
}

export function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <Trophy className="text-yellow-500 w-6 h-6" />
      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
        {streak} Day{streak !== 1 ? 's' : ''} Clean
      </span>
    </div>
  );
}