import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useHabitStore } from '../../stores/habitStore';
import { useTheme } from '../../contexts/ThemeContext';
import { TriggerType, triggerOptions } from '../../types';

interface TriggerCount {
  name: string;
  count: number;
  id: TriggerType;
}

export function TriggerStats() {
  const { triggerStats } = useHabitStore();
  const { isDark } = useTheme();

  // Convert to chart data format and sort by count
  const data: TriggerCount[] = triggerOptions
    .map(option => ({
      name: option.label,
      id: option.id,
      count: triggerStats[option.id] || 0
    }))
    .sort((a, b) => b.count - a.count);

  const chartStyle = {
    color: isDark ? '#e2e8f0' : '#1f2937',
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
      <h3 className="text-sm font-medium text-purple-700 dark:text-purple-200 mb-4">
        Trigger Analysis
      </h3>
      
      {data.some(item => item.count > 0) ? (
        <>
          <div className="h-[200px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical">
                <XAxis 
                  type="number"
                  stroke={chartStyle.color}
                  fontSize={12}
                />
                <YAxis 
                  type="category"
                  dataKey="name"
                  stroke={chartStyle.color}
                  fontSize={12}
                  width={120}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: isDark ? '#e2e8f0' : '#1f2937',
                  }}
                />
                <Bar 
                  dataKey="count" 
                  fill={isDark ? '#9333ea80' : '#9333ea'}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-purple-700 dark:text-purple-200">
              All Triggers
            </h4>
            <div className="grid gap-2">
              {data.map((trigger) => (
                <div 
                  key={trigger.id}
                  className="flex items-center justify-between p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {trigger.name}
                  </span>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
                    {trigger.count} times
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400 py-8">
          No trigger data recorded yet
        </p>
      )}
    </div>
  );
}