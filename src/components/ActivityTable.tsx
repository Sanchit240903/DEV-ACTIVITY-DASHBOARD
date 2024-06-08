import React, { useState } from 'react';
import { AuthorWorklogRow, DayWiseActivity, TotalActivity } from '../types/ActivityData';
import './styles/ActivityTable.css'; // Import the CSS file

interface ActivityTableProps {
  data: AuthorWorklogRow[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleNameSelect = (name: string | null) => {
    setSelectedName(name ?? null); // Ensure the value is never `null`
  };

  const renderDayWiseActivityTable = (dayWiseActivity: DayWiseActivity[]) => {
    const dates = dayWiseActivity.map(day => day.date);
    const activities = dayWiseActivity[0]?.items.children.map(item => item.label) ?? [];

    return (
      <table className="day-wise-activity-table">
        <thead>
          <tr>
            <th></th>
            {dates.map(date => (
              <th key={date}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity}>
              <td>{activity}</td>
              {dayWiseActivity.map(day => (
                <td key={day.date}>
                  {day.items.children.find(item => item.label === activity)?.count ?? '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderTotalActivityChart = (totalActivity: TotalActivity[]) => {
    return (
      <div className="total-activity-chart">
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {totalActivity.map((activity, index) => (
              <tr key={index}>
                <td>{activity.name}</td>
                <td>{activity.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="activity-table-container">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="name-card" onMouseEnter={() => handleNameSelect(row.name)} onMouseLeave={() => handleNameSelect(null)}>
          <h3>{row.name}</h3>
          {selectedName === row.name && (
            <div className="popup-card">
              <div className="total-activity-title">
                <h4>Total Activity</h4>
              </div>
              {renderTotalActivityChart(row.totalActivity)}
              <div>
                <h4>Day Wise Activity</h4>
                {renderDayWiseActivityTable(row.dayWiseActivity)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ActivityTable;
