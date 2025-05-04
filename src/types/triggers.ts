export type TriggerType = 
  | 'stress-relief'
  | 'self-medication'
  | 'boredom'
  | 'peer-pressure'
  | 'decompression'
  | 'celebration'
  | 'availability'
  | 'environmental';

export interface Solution {
  title: string;
  description: string;
}

export interface TriggerOption {
  id: TriggerType;
  label: string;
  description: string;
  solutions: Solution[];
}

export const triggerOptions: TriggerOption[] = [
  {
    id: 'stress-relief',
    label: 'Stress Relief',
    description: 'Using as a way to cope with stress or anxiety',
    solutions: [
      {
        title: 'Healthy Relaxation Techniques',
        description: 'Try meditation, yoga, or deep-breathing exercises to reduce stress naturally'
      },
      {
        title: 'Physical Activity',
        description: 'Exercise like running, swimming, or cycling can release endorphins and relieve tension'
      },
      {
        title: 'Creative Outlets',
        description: 'Painting, journaling, or playing a musical instrument can be calming and therapeutic'
      },
      {
        title: 'Therapy or Counseling',
        description: 'Professional support can provide tools to manage stress in healthier ways'
      },
      {
        title: 'Nature Connection',
        description: 'Spend time outdoors, practice grounding exercises, or try gardening to reduce stress'
      }
    ]
  },
  {
    id: 'self-medication',
    label: 'Self-Medication',
    description: 'Attempting to manage physical or emotional pain',
    solutions: [
      {
        title: 'Professional Help',
        description: 'Consult with healthcare providers for proper treatment and pain management strategies'
      },
      {
        title: 'Support Groups',
        description: 'Connect with others who understand your struggles and share coping strategies'
      },
      {
        title: 'Mindfulness Practices',
        description: 'Learn techniques to manage pain and emotional distress through mindfulness and meditation'
      },
      {
        title: 'Alternative Therapies',
        description: 'Explore options like acupuncture, massage, or physical therapy for pain management'
      },
      {
        title: 'Emotional Processing',
        description: 'Practice journaling, art therapy, or counseling to work through emotional pain'
      }
    ]
  },
  {
    id: 'boredom',
    label: 'Boredom',
    description: 'Using due to lack of activities or stimulation',
    solutions: [
      {
        title: 'New Hobbies',
        description: 'Explore interests like sports, art, music, or learning a new skill or language'
      },
      {
        title: 'Social Activities',
        description: 'Join clubs, volunteer, or participate in community events and group activities'
      },
      {
        title: 'Goal Setting',
        description: 'Create personal or professional goals to work towards with clear milestones'
      },
      {
        title: 'Learning Pursuits',
        description: 'Take online courses, read books, or learn new skills through workshops'
      },
      {
        title: 'Creative Projects',
        description: 'Start a DIY project, write a blog, or create content in areas that interest you'
      }
    ]
  },
  {
    id: 'peer-pressure',
    label: 'Peer Pressure',
    description: 'Influence from social situations or friends',
    solutions: [
      {
        title: 'Boundary Setting',
        description: 'Learn to say no and establish healthy boundaries with others confidently'
      },
      {
        title: 'New Social Circles',
        description: 'Connect with people who support your recovery journey and share healthy interests'
      },
      {
        title: 'Communication Skills',
        description: 'Practice assertiveness and expressing your needs clearly without guilt'
      },
      {
        title: 'Alternative Activities',
        description: 'Suggest substance-free activities when socializing with friends'
      },
      {
        title: 'Support Network',
        description: 'Build relationships with people who respect your choices and support your goals'
      }
    ]
  },
  {
    id: 'decompression',
    label: 'Decompression',
    description: 'Unwinding after a long day or stressful event',
    solutions: [
      {
        title: 'Evening Routine',
        description: 'Develop a calming routine with reading, bath, or gentle stretching before bed'
      },
      {
        title: 'Nature Time',
        description: 'Spend time outdoors, walking or simply enjoying natural surroundings'
      },
      {
        title: 'Relaxation Techniques',
        description: 'Practice progressive muscle relaxation, deep breathing, or guided imagery'
      },
      {
        title: 'Mindful Activities',
        description: 'Try coloring, puzzles, or gentle yoga to transition from work to rest'
      },
      {
        title: 'Self-Care Rituals',
        description: 'Create personal care routines that help you unwind and feel restored'
      }
    ]
  },
  {
    id: 'celebration',
    label: 'Celebration',
    description: 'Using during special occasions or achievements',
    solutions: [
      {
        title: 'Alternative Celebrations',
        description: 'Plan substance-free activities like special meals, adventures, or experiences'
      },
      {
        title: 'Reward System',
        description: 'Create meaningful non-substance rewards for achievements like trips or treats'
      },
      {
        title: 'Share Success',
        description: 'Connect with supportive people who celebrate your progress without substances'
      },
      {
        title: 'Memory Making',
        description: 'Focus on creating lasting memories through photos, journaling, or special traditions'
      },
      {
        title: 'Achievement Recognition',
        description: 'Develop personal rituals or ceremonies that honor accomplishments substance-free'
      }
    ]
  },
  {
    id: 'availability',
    label: 'Availability',
    description: 'Easy access or opportunity to use',
    solutions: [
      {
        title: 'Environment Changes',
        description: 'Remove triggers and create a substance-free living space and routine'
      },
      {
        title: 'Schedule Planning',
        description: 'Structure your day to avoid high-risk situations and times'
      },
      {
        title: 'Support Network',
        description: 'Have specific people you can call when facing temptation or triggers'
      },
      {
        title: 'Alternative Activities',
        description: 'Plan ahead with a list of engaging activities for high-risk times'
      },
      {
        title: 'Barrier Creation',
        description: 'Set up practical obstacles between you and access to substances'
      }
    ]
  },
  {
    id: 'environmental',
    label: 'Environmental Stressors',
    description: 'External factors like location or situations',
    solutions: [
      {
        title: 'Safe Spaces',
        description: 'Identify and spend time in trigger-free environments you can rely on'
      },
      {
        title: 'Coping Strategies',
        description: 'Develop specific plans for managing challenging environments you can\'t avoid'
      },
      {
        title: 'Lifestyle Changes',
        description: 'Consider adjustments to avoid or minimize exposure to triggering environments'
      },
      {
        title: 'Stress Management',
        description: 'Learn techniques to stay grounded and centered in challenging environments'
      },
      {
        title: 'Environmental Design',
        description: 'Create personal spaces that promote calm and reduce exposure to triggers'
      }
    ]
  }
];