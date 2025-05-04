import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useHabitStore } from '../../stores/habitStore';

const triggers = [
  'Stress Relief',
  'Self-Medication',
  'Boredom',
  'Peer Pressure',
  'Decompression',
  'Celebration',
  'Availability',
  'Environmental Stressors'
];

export function TriggerSelector() {
  const { records, updateRecord } = useHabitStore();
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const record = records[dateStr] || { 
    drinks: 0, 
    uses: 0,
    trigger: undefined
  };

  const handleTriggerSelect = (trigger: string) => {
    updateRecord(dateStr, {
      ...record,
      trigger
    });
  };

  // Only show if there are uses recorded
  if (record.uses === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 shadow-sm transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
          What triggered your use today?
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {triggers.map((trigger) => (
          <button
            key={trigger}
            onClick={() => handleTriggerSelect(trigger)}
            className={`text-left p-3 rounded-lg transition-colors ${
              record.trigger === trigger
                ? 'bg-purple-200 dark:bg-purple-900/50 text-purple-800 dark:text-purple-100'
                : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
            }`}
          >
            {trigger}
          </button>
        ))}
      </div>
    </div>
  );
}