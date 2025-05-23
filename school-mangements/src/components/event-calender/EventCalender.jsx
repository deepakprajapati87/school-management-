import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  addWeeks,
  subWeeks,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from 'date-fns';
import { HeadingThree } from '../headingThree/headingThree';

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week'); // 'day' | 'week' | 'month'

  const next = () => {
    setCurrentDate(viewMode === 'month' ? addMonths(currentDate, 1) : addWeeks(currentDate, 1));
  };

  const prev = () => {
    setCurrentDate(viewMode === 'month' ? subMonths(currentDate, 1) : subWeeks(currentDate, 1));
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({
    start: startOfWeek(monthStart),
    end: endOfWeek(monthEnd),
  });

  const weekStart = startOfWeek(currentDate);
  const weekEnd = endOfWeek(currentDate);
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <div className='event-calendar'>
      <div className="card p-3">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
         
          <HeadingThree title='Event Calendar'/>
          <div>
            <button className="btn btn-sm btn-outline-secondary me-1" onClick={prev}>
              &lt;
            </button>
            <button className="btn btn-sm btn-outline-secondary" onClick={next}>
              &gt;
            </button>
          </div>
        </div>

        {/* Date Label */}
        <div className="mb-3 fw-bold">
          {viewMode === 'month' && format(currentDate, 'MMMM yyyy')}
          {viewMode === 'week' && `${format(weekStart, 'MMM d')} – ${format(weekEnd, 'MMM d, yyyy')}`}
          {viewMode === 'day' && format(currentDate, 'EEEE, MMMM d, yyyy')}
        </div>

        {/* View Toggle */}
        <div className="btn-group mb-3" role="group">
          {['day', 'week', 'month'].map((mode) => (
            <button
              key={mode}
              className={`btn btn-sm ${viewMode === mode ? 'btn-danger text-white' : 'btn-outline-secondary'}`}
              onClick={() => setViewMode(mode)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>

        {/* Day View */}
        {viewMode === 'day' && (
          <div className="border p-3 text-center">
            <h6>{format(currentDate, 'EEEE')}</h6>
            <div className="mt-3" style={{ height: '100px' }}>
              {/* Events can go here */}
              No events for today.
            </div>
          </div>
        )}

        {/* Week View */}
        {viewMode === 'week' && (
          <div>
            <div className="d-flex border-top text-center">
              {weekDays.map((day) => (
                <div key={day} className="flex-fill p-2">
                  <div className={`fw-bold ${isSameDay(day, new Date()) ? 'text-danger' : ''}`}>
                    {format(day, 'EEE M/d')}
                  </div>
                  <div className="border mt-2" style={{ height: '100px' }}>
                    {/* Events can go here */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Month View */}
        {viewMode === 'month' && (
          <div className="border-top">
            <div className="d-flex text-center mt-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="flex-fill fw-bold">
                  {d}
                </div>
              ))}
            </div>
            <div className="d-flex flex-wrap">
              {monthDays.map((day) => (
                <div
                  key={day.toString()}
                  className={`p-2 text-center flex-fill ${!isSameMonth(day, monthStart) ? 'text-muted' : ''} ${isSameDay(day, new Date()) ? 'bg-light rounded-circle' : ''
                    }`}
                  style={{ width: '14.28%' }}
                >
                  {format(day, 'd')}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default EventCalendar;
