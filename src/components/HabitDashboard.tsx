import React, { useState, useEffect } from 'react';
import { Title } from './Title';
import { DailyQuote } from './DailyQuote';
import { DailyCounter } from './DailyCounter';
import { StreakCounter } from './StreakCounter';
import { WeeklyView } from './WeeklyView';
import { Navigation } from './Navigation';
import { ThemeToggle } from './ThemeToggle';
import { TriggerView } from './views/TriggerView';
import { DailySummary } from './summary/DailySummary';
import { AIChat } from './chat/AIChat';
import { useHabitStore } from '../stores/habitStore';
import type { View } from '../types';

function HabitDashboard() {
  const [activeView, setActiveView] = useState<View>('daily');
  const { resetData } = useHabitStore();

  useEffect(() => {
    resetData();
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'trigger':
        return <TriggerView onBack={() => setActiveView('daily')} onViewChange={setActiveView} />;
      case 'weekly':
        return <WeeklyView onViewChange={setActiveView} />;
      case 'summary':
        return <DailySummary onViewChange={setActiveView} />;
      case 'chat':
        return <AIChat onBack={() => setActiveView('daily')} />;
      default:
        return <DailyCounter onUseIncrement={() => setActiveView('trigger')} onViewChange={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen px-2 py-4">
      <div className="max-w-[320px] mx-auto">
        <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-xl shadow-purple-100/30 hover:shadow-purple-200/40 dark:shadow-none dark:bg-gray-800/90 p-4 border border-purple-100/30 dark:border-gray-700/50 transition-all duration-300">
          <ThemeToggle />
          <Title />
          {activeView !== 'trigger' && activeView !== 'summary' && activeView !== 'chat' && (
            <>
              <DailyQuote />
              <StreakCounter streak={0} />
            </>
          )}
          
          <div className="mb-6">
            {renderView()}
          </div>

          {activeView !== 'trigger' && (
            <div className="pt-2 border-t border-purple-100/30 dark:border-gray-700">
              <Navigation 
                activeView={activeView} 
                onViewChange={setActiveView} 
              />
            </div>
          )}
          
          <div className="mt-8 text-center">
            <img 
              src="https://f002.backblazeb2.com/file/appimages/addiction.jpg"
              alt="A new dawn, a new beginning" 
              className="rounded-lg shadow-lg mx-auto max-w-full dark:opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitDashboard;