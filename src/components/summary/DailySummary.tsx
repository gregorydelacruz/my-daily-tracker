import React from 'react';
import { Brain, Moon, Utensils, Activity, AlertCircle, MessageCircle } from 'lucide-react';
import { useDailyRecord } from '../../hooks/useDailyRecord';
import { triggerOptions } from '../../types';

interface DailySummaryProps {
  onViewChange?: (view: 'chat') => void;
}

export function DailySummary({ onViewChange }: DailySummaryProps) {
  const { record } = useDailyRecord();

  const getLevelDescription = (value: number) => {
    if (value <= 3) return 'Low';
    if (value <= 7) return 'Moderate';
    return 'High';
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => onViewChange?.('chat')}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 hover:from-purple-200 hover:to-indigo-200 dark:hover:from-purple-900/50 dark:hover:to-indigo-900/50 rounded-lg transition-all duration-300 mb-6"
      >
        <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
          Chat
        </span>
      </button>

      <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-100 mb-4">
        Today's Summary
      </h3>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
        <h4 className="text-sm font-medium text-purple-700 dark:text-purple-200 mb-3">
          Daily Levels
        </h4>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-600 dark:text-purple-300" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Stress</span>
            </div>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
              {record.stressLevel} - {getLevelDescription(record.stressLevel || 0)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-purple-600 dark:text-purple-300" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Tiredness</span>
            </div>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
              {record.tirednessLevel} - {getLevelDescription(record.tirednessLevel || 0)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-purple-600 dark:text-purple-300" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Hunger</span>
            </div>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
              {record.hungerLevel} - {getLevelDescription(record.hungerLevel || 0)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-600 dark:text-purple-300" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Physical</span>
            </div>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
              {record.physicalLevel} - {getLevelDescription(record.physicalLevel || 0)}
            </span>
          </div>
        </div>
      </div>

      {record.trigger && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <h4 className="text-sm font-medium text-purple-700 dark:text-purple-200">
              Trigger Identified
            </h4>
          </div>
          
          <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">
              {triggerOptions.find(t => t.id === record.trigger)?.label}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {triggerOptions.find(t => t.id === record.trigger)?.description}
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
        <h4 className="text-sm font-medium text-purple-700 dark:text-purple-200 mb-3">
          Usage Today
        </h4>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <span className="text-sm text-gray-700 dark:text-gray-300">Drinks</span>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
              {record.drinks}
            </span>
          </div>
          
          <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <span className="text-sm text-gray-700 dark:text-gray-300">Uses</span>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
              {record.uses}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}