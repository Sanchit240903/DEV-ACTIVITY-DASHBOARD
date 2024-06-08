// components/SummaryStats.tsx
import React from 'react';
import './styles/SummaryStats.css';

interface SummaryStatsProps {
  data: { label: string; count: number }[];
}

const SummaryStats: React.FC<SummaryStatsProps> = ({ data }) => {
  return (
    <div className="summary-stats-container">
      <h2>Summary Statistics</h2>
      <div className="summary-stats">
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.label}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryStats;
