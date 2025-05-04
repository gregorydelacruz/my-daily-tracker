import React, { useState } from 'react';
import { ArrowLeft, Lightbulb, ChevronRight, Brain, Wallet as Walk, BookOpen, Phone, Music, Palette, Dumbbell, Puzzle, Users, ListTodo, Moon, Cog as Yoga, ShowerHead as Shower, Book, Bed, Shield, MapPin, Goal, UserPlus, Clock, Stethoscope, Heart, Sparkles, HelpingHand, Calendar, Gift, Camera, Trophy, Star, PartyPopper, MessageSquare, DoorOpen, UserCheck, FileX, Target } from 'lucide-react';
import { useHabitStore } from '../../stores/habitStore';
import { triggerOptions, TriggerType } from '../../types';

interface TriggerViewProps {
  onBack: () => void;
  onViewChange?: (view: 'chat') => void;
}

export function TriggerView({ onBack, onViewChange }: TriggerViewProps) {
  const { records, updateRecord, updateTriggerStats } = useHabitStore();
  const [selectedTrigger, setSelectedTrigger] = useState<TriggerType | null>(null);
  const [showStressResponse, setShowStressResponse] = useState(false);
  const [showBoredomResponse, setShowBoredomResponse] = useState(false);
  const [showDecompressionResponse, setShowDecompressionResponse] = useState(false);
  const [showPeerPressureResponse, setShowPeerPressureResponse] = useState(false);
  const [showSelfMedicationResponse, setShowSelfMedicationResponse] = useState(false);
  const [showCelebrationResponse, setShowCelebrationResponse] = useState(false);
  const [showChatPrompt, setShowChatPrompt] = useState(false);
  
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const record = records[dateStr] || { 
    drinks: 0, 
    uses: 0,
    trigger: undefined
  };

  const handleTriggerSelect = (triggerId: TriggerType) => {
    setSelectedTrigger(triggerId);
    updateRecord(dateStr, {
      ...record,
      trigger: triggerId
    });
    updateTriggerStats(triggerId);

    if (triggerId === 'stress-relief') {
      setShowStressResponse(true);
    } else if (triggerId === 'boredom') {
      setShowBoredomResponse(true);
    } else if (triggerId === 'decompression') {
      setShowDecompressionResponse(true);
    } else if (triggerId === 'peer-pressure') {
      setShowPeerPressureResponse(true);
    } else if (triggerId === 'self-medication') {
      setShowSelfMedicationResponse(true);
    } else if (triggerId === 'celebration') {
      setShowCelebrationResponse(true);
    }
  };

  const handleContinue = () => {
    setShowChatPrompt(true);
  };

  const handleStartChat = () => {
    if (onViewChange) {
      onViewChange('chat');
    }
  };

  if (showChatPrompt) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setShowChatPrompt(false)}
            className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-100">
            Need Support?
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 py-8">
          <MessageSquare className="w-16 h-16 text-purple-500 dark:text-purple-400" />
          <p className="text-center text-gray-700 dark:text-gray-300">
            Talk through your thoughts and feelings with a supportive chat.
          </p>
          
          <div className="flex gap-4 w-full">
            <button
              onClick={onBack}
              className="flex-1 py-3 px-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Not Now
            </button>
            <button
              onClick={handleStartChat}
              className="flex-1 py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showBoredomResponse) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setShowBoredomResponse(false)}
            className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-100">
            Dealing with Boredom
          </h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          It seems you used to fill a moment of boredom. Here are some healthier ways to engage your mind and body:
        </p>

        <div className="space-y-4">
          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Explore a Hobby or New Skill</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Pick up a book, try a new recipe, watch a tutorial on something you've always wanted to learn.</li>
              <li>Turning boredom into creative or productive time can be surprisingly fulfilling.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Dumbbell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Get Moving</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Go for a walk, do light stretching, or try a quick workout video.</li>
              <li>Physical activity boosts mood and fights off restlessness.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Puzzle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Mental Stimulation</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Play a puzzle game, do a crossword, or try a meditation app.</li>
              <li>Even a short brain-teaser can help refocus your energy.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Connect With Someone</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Text or call a friend, join an online group or forum, or simply chat with a neighbor.</li>
              <li>Social interaction can break the monotony and provide support.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <ListTodo className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Plan Your Day</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Write down a short to-do list or goals for the next hour or two.</li>
              <li>Giving yourself structure can prevent boredom from creeping in.</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-700 dark:text-gray-300 font-medium mt-6">
          You deserve better than empty habits. Which of these will you try next time you feel bored?
        </p>

        <button
          onClick={handleContinue}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>Continue</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  if (showCelebrationResponse) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setShowCelebrationResponse(false)}
            className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-100">
            Celebrating Without Substances
          </h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          It looks like you used to celebrate. Here are some healthier ways to mark the occasion:
        </p>

        <div className="space-y-4">
          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <PartyPopper className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Non-Alcoholic/Non-Drug Celebration Options</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Try making a fun, creative mocktail or special dessert.</li>
              <li>Having a festive but substance-free option can still feel celebratory.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Camera className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Plan an Experience</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Treat yourself to an activity you enjoy—like watching a favorite movie, going to a show, or taking a mini getaway.</li>
              <li>Meaningful experiences can create lasting positive memories.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Invite Supportive Friends</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Host a gathering centered around games, good food, or music—without substances.</li>
              <li>Surrounding yourself with people who respect your choices helps keep celebrations fun and safe.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Reward Yourself</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Buy yourself a small gift or indulge in a special meal.</li>
              <li>Marking milestones with a tangible reward reinforces your progress.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Reflect on Achievements</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Write down what you're celebrating and why it's important.</li>
              <li>Recognizing the deeper meaning of your success can be just as satisfying as a traditional party.</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-700 dark:text-gray-300 font-medium mt-6">
          You deserve to celebrate in ways that uplift you. Which of these will you try next time you want to mark a special moment?
        </p>

        <button
          onClick={handleContinue}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>Continue</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  if (showPeerPressureResponse) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setShowPeerPressureResponse(false)}
            className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-100">
            Handling Peer Pressure
          </h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          It seems you used due to peer pressure. Here are some healthier ways to handle these situations:
        </p>

        <div className="space-y-4">
          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Practice Saying 'No'</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Rehearse simple phrases like, 'No thanks, I'm good,' or 'Not tonight, I'm trying to stay sober.'</li>
              <li>Being prepared makes it easier to stand your ground.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Set Boundaries</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Consider limiting time spent with people or in places where you feel pressured.</li>
              <li>You can suggest alternative activities that don't involve drugs or alcohol.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Find a Supportive Ally</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Bring a friend who respects your choices when you go out.</li>
              <li>Having someone else back you up can make a big difference.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <DoorOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Offer an Excuse</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>If being direct feels too hard, have a ready-made reason to refuse (e.g., 'I'm on medication,' or 'I have to drive later').</li>
              )
              <li>An exit strategy can reduce anxiety in high-pressure situations.</li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-purple-800 dark:text-purple-200">Remember Your Goals</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-7 list-disc">
              <li>Remind yourself why quitting is important—your health, relationships, or personal well-being.</li>
              <li>Keeping your motivation top of mind makes it easier to resist outside pressure.</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-700 dark:text-gray-300 font-medium mt-6">
          You have the right to make choices that support your health. Which of these will you try next time you feel pressured?
        </p>

        <button
          onClick={handleContinue}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>Continue</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const selectedTriggerOption = selectedTrigger 
    ? triggerOptions.find(option => option.id === selectedTrigger)
    : null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-100">
          What triggered your use?
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {triggerOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleTriggerSelect(option.id)}
            className={`text-left p-4 rounded-lg transition-colors ${
              selectedTrigger === option.id
                ? 'bg-purple-200 dark:bg-purple-900/50 text-purple-800 dark:text-purple-100'
                : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
            }`}
          >
            <div className="font-medium mb-1">{option.label}</div>
            <div className="text-sm opacity-80">{option.description}</div>
          </button>
        ))}
      </div>

      {selectedTriggerOption && selectedTrigger !== 'stress-relief' && selectedTrigger !== 'boredom' && selectedTrigger !== 'celebration' && selectedTrigger !== 'peer-pressure' && (
        <div className="mt-8 space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                Suggested Solutions
              </h3>
            </div>
            <div className="space-y-4">
              {selectedTriggerOption.solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4"
                >
                  <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Continue</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}