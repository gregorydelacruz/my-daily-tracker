import React from 'react';
import { Wine, Snowflake } from 'lucide-react';

export function Legend() {
  return (
    <div className="mt-6 flex justify-center gap-8 text-sm">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50">
        <Wine className="w-4 h-4 text-purple-600" />
        <span className="text-purple-700">Drinking</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50">
        <Snowflake className="w-4 h-4 text-blue-600" />
        <span className="text-blue-700">Using</span>
      </div>
    </div>
  );
}