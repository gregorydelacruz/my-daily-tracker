export const getDaysOfWeek = (weekOffset = 0) => {
  const today = new Date();
  const days = [];
  
  // Get the start of the selected week
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - today.getDay() + (weekOffset * 7));
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push({
      date,
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      dayDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      isToday: date.toDateString() === today.toDateString()
    });
  }
  
  return days;
};