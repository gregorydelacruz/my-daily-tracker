import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HabitButtonProps {
  isActive: boolean;
  onClick: () => void;
  Icon: LucideIcon;
  disabled?: boolean;
}

export function HabitButton({ isActive, onClick, Icon, disabled = false }: HabitButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-2 rounded-md flex items-center justify-center transition-all ${
        disabled 
          ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400'
          : isActive 
          ? 'bg-red-100 text-red-600 hover:bg-red-200' 
          : 'bg-green-100 text-green-600 hover:bg-green-200'
      }`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}