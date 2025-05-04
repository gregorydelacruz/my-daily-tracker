export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const formatDisplayDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const getWeekDates = (weekOffset = 0): Date[] => {
  const today = new Date();
  const dates = [];
  
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - today.getDay() + (weekOffset * 7));
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date);
  }
  
  return dates;
};