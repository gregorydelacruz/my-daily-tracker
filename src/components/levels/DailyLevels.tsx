import React from 'react';
import { Brain, Moon, Utensils, Activity } from 'lucide-react';
import { LevelTracker } from './LevelTracker';
import { useHabitStore } from '../../stores/habitStore';

export function DailyLevels() {
  const { records, updateRecord } = useHabitStore();
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const record = records[dateStr] || { 
    drinks: 0, 
    uses: 0, 
    stressLevel: 5,
    tirednessLevel: 5,
    hungerLevel: 5,
    physicalLevel: 5
  };

  const handleLevelUpdate = (
    type: 'stressLevel' | 'tirednessLevel' | 'hungerLevel' | 'physicalLevel',
    value: number
  ) => {
    updateRecord(dateStr, {
      ...record,
      [type]: value
    });
  };

  return (
    <div className="space-y-4">
      <LevelTracker
        value={record.stressLevel || 5}
        onChange={(value) => handleLevelUpdate('stressLevel', value)}
        label="Stress Level Today"
        icon={Brain}
      />

      <LevelTracker
        value={record.tirednessLevel || 5}
        onChange={(value) => handleLevelUpdate('tirednessLevel', value)}
        label="Tiredness Level Today"
        icon={Moon}
      />

      <LevelTracker
        value={record.hungerLevel || 5}
        onChange={(value) => handleLevelUpdate('hungerLevel', value)}
        label="Hunger Level Today"
        icon={Utensils}
      />

      <LevelTracker
        value={record.physicalLevel || 5}
        onChange={(value) => handleLevelUpdate('physicalLevel', value)}
        label="Physical Level Today"
        icon={Activity}
      />
    </div>
  );
}