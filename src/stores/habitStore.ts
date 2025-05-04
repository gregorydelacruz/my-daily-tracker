import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { HabitRecord, TriggerType } from '../types';

interface HabitStore {
  records: Record<string, HabitRecord>;
  triggerStats: Record<TriggerType, number>;
  updateRecord: (date: string, record: HabitRecord) => void;
  updateTriggerStats: (trigger: TriggerType) => void;
  resetData: () => void;
}

export const useHabitStore = create<HabitStore>()(
  persist(
    (set) => ({
      records: {},
      triggerStats: {
        'stress-relief': 0,
        'self-medication': 0,
        'boredom': 0,
        'peer-pressure': 0,
        'decompression': 0,
        'celebration': 0,
        'availability': 0,
        'environmental': 0
      },
      updateRecord: (date, record) =>
        set((state) => ({
          records: {
            ...state.records,
            [date]: record,
          },
        })),
      updateTriggerStats: (trigger) =>
        set((state) => ({
          triggerStats: {
            ...state.triggerStats,
            [trigger]: (state.triggerStats[trigger] || 0) + 1,
          },
        })),
      resetData: () =>
        set(() => ({
          records: {},
          triggerStats: {
            'stress-relief': 0,
            'self-medication': 0,
            'boredom': 0,
            'peer-pressure': 0,
            'decompression': 0,
            'celebration': 0,
            'availability': 0,
            'environmental': 0
          }
        }))
    }),
    {
      name: 'habit-storage',
    }
  )
);