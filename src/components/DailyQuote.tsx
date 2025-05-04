import React, { useState, useEffect } from 'react';
import { getRandomQuote } from '../utils/quotes';
import { Sparkles } from 'lucide-react';

export function DailyQuote() {
  const [quote, setQuote] = useState(getRandomQuote());
  
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);
  
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 rounded-lg mb-4">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-purple-400" />
        <h2 className="text-base font-semibold text-purple-700">Daily Inspiration</h2>
      </div>
      <p className="text-sm text-center text-gray-700 italic">"{quote}"</p>
    </div>
  );
}