export const motivationalQuotes = [
  "Every day is a new beginning. Stay strong, stay focused.",
  "Progress is progress, no matter how small.",
  "You are stronger than you know.",
  "The journey of a thousand miles begins with a single step.",
  "Your future self will thank you for the choices you make today.",
  "Recovery is not for people who need it, it's for people who want it.",
  "Small choices become actions, actions become habits.",
  "One day at a time - this is enough. Do not look back and grieve, nor forward with fear.",
  "The only person you should try to be better than is the person you were yesterday.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Your struggle is part of your story.",
  "Fall down seven times, stand up eight.",
  "Every accomplishment starts with the decision to try.",
  "You have survived 100% of your worst days.",
  "The harder the struggle, the more glorious the triumph.",
  "Believe you can and you're halfway there.",
  "It's okay to not be okay, as long as you never give up.",
  "The past cannot be changed, but the future is yet in your power.",
  "Rock bottom became the solid foundation on which I rebuilt my life.",
  "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
  "Your life is worth living. Never give up.",
  "The struggle you're in today is developing the strength you need for tomorrow.",
  "Recovery is about progression, not perfection.",
  "Every day is a second chance.",
  "You are not alone in this journey.",
  "The best time for a new beginning is now.",
  "Your potential is endless. Go do what you were created to do.",
  "Trust the process.",
  "Each day is a new opportunity to grow and be better.",
  "You have the power to say 'this is not how my story will end.'",
  "Take it one day at a time."
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};