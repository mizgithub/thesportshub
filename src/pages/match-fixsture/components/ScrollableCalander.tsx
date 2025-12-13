import { useRef, useEffect } from 'react';


// Define the shape of a single date item for clean typing within the component
interface CalendarDay {
  date: Date;
  dayName: string;
  monthDay: string;
  isToday: boolean;
}

// A simple utility to format dates
const formatDate = (date: Date): { dayName: string, monthDay: string } => {
  // Options for the day name (e.g., WED)
  const dayNameOptions: Intl.DateTimeFormatOptions = { weekday: 'short' };
  const dayName = date.toLocaleDateString(undefined, dayNameOptions).toUpperCase();

  // Options for the day and month (e.g., 30 AUG)
  const monthDayOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
  // Using replace to remove common commas or unwanted characters from the locale format
  const monthDay = date.toLocaleDateString(undefined, monthDayOptions)
    .toUpperCase()
    .replace(',', '')
    .trim().split(" ").reverse().join(" ");

  return { dayName, monthDay };
};

const HorizontalCalendar = () => {
  const today = new Date();
  const daysToShow = 3;
  const calendarRef = useRef<HTMLDivElement>(null);
  const todayRef = useRef<HTMLDivElement>(null); // Type the ref for the 'today' element

  const dates: CalendarDay[] = Array.from({ length: daysToShow * 2 + 1 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + (i - daysToShow));

    // Use the updated formatting function:
    const { dayName, monthDay } = formatDate(date);
    const isToday = date.toDateString() === today.toDateString();

    return { date, dayName, monthDay, isToday };
  });

  useEffect(() => {
    if (calendarRef.current && todayRef.current) {
      const scrollContainer = calendarRef.current;
      const todayElement = todayRef.current;

      // Calculate the scroll position to center "today" in the viewport
      const scrollPosition = todayElement.offsetLeft -
        (scrollContainer.clientWidth / 2) +
        (todayElement.clientWidth / 2);

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className='relative'>
      <div
      ref={calendarRef}
      className="flex overflow-x-auto gap-[8px] "
    // Reminder: you need the custom CSS for `scrollbar-hide`
    >
      {dates.map((day: CalendarDay) => (
        <div
          key={day.date.toISOString()}
          ref={day.isToday ? todayRef : null}
          className={`flex flex-col items-center justify-center p-3 font-[400] rounded-lg cursor-pointer ${day.isToday ? 'bg-[#1D1E2B] rounded-[20px] text-[#00FFA5]' : ''}`
          }
        >
          <span className="text-[14px] font-[400] text-center">{day?.isToday ? "Today" : day.dayName}</span>
          <span className="text-[12px] font-[400] text-center">{day.monthDay}</span>
        </div>
      ))}
    </div>

      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-100 bg-gradient-to-r from-[#181921] to-transparent" />
        <div className="w-100 bg-gradient-to-l from-[#181921] to-transparent" />
      </div>

    </div>


  );
};

export default HorizontalCalendar;