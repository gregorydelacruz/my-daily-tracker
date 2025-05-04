import React from 'react';
import HabitDashboard from './components/HabitDashboard';
import { ThemeProvider } from './contexts/ThemeContext';
import { PopupTab } from './components/PopupTab';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        <HabitDashboard />
        <PopupTab />
      </div>
    </ThemeProvider>
  );
}

export default App;