import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useHabitStore } from '../stores/habitStore';
import { useTheme } from '../contexts/ThemeContext';

interface ChartData {
  name: string;
  drinks: number;
  uses: number;
}

interface WeeklyStatsProps {
  weekOffset: number;
}

export function WeeklyStats({ weekOffset }: WeeklyStatsProps) {
  const { records } = useHabitStore();
  const { isDark } = useTheme();
  
  // Get the days for the selected week
  const getDaysForWeek = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + (weekOffset * 7));
    
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date.toISOString().split('T')[0];
    });
  };

  const weekDays = getDaysForWeek();
  
  const data: ChartData[] = weekDays.map(date => {
    const record = records[date] || { drinks: 0, uses: 0 };
    return {
      name: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
      drinks: record.drinks,
      uses: record.uses
    };
  });

  const chartStyle = {
    color: isDark ? '#e2e8f0' : '#1f2937',
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
        <h3 className="text-sm font-medium text-purple-700 dark:text-purple-200 mb-4">Weekly Overview</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                stroke={chartStyle.color}
                fontSize={12}
              />
              <YAxis 
                stroke={chartStyle.color}
                fontSize={12}
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
                dataKey="drinks" 
                fill="#9333ea" 
                name="Drinks"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="uses" 
                fill="#3b82f6" 
                name="Uses"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
          <h4 className="text-sm font-medium text-purple-700 dark:text-purple-200 mb-2">Total Drinks</h4>
          <p className="text-2xl font-bold text-purple-800 dark:text-purple-100">
            {data.reduce((sum, day) => sum + day.drinks, 0)}
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-700 dark:text-blue-200 mb-2">Total Uses</h4>
          <p className="text-2xl font-bold text-blue-800 dark:text-blue-100">
            {data.reduce((sum, day) => sum + day.uses, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}