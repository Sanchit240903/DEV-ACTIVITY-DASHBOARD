import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { DayWiseActivity, ActivityItem } from '../types/ActivityData';
import './styles/ActivityChart.css';

interface ActivityChartProps {
  data: DayWiseActivity[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => (
  <div className="activity-chart-container">
    <h2>Activity Chart</h2>
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      {data.length > 0 &&
        data[0].items.children.map((item: ActivityItem, index: number) => (
          <Line
            key={index}
            type="monotone"
            dataKey={(d: DayWiseActivity) => d.items.children[index].count}
            name={item.label} // Display activity name in legend
            stroke={item.fillColor}
          />
        ))}
    </LineChart>
  </div>
);

export default ActivityChart;
