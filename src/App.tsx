// App.tsx
import React, { useState } from 'react';
import Filters from './components/Filters';
import SummaryStats from './components/SummaryStats';
import ActivityChart from './components/ActivityChart';
import ActivityTable from './components/ActivityTable';
import { useFetchData } from './hooks/useFetchData';
import { AuthorWorklogRow } from './types/ActivityData';
import { transformToDayWiseActivity, getSummaryStatistics } from './utils/dataProcessing';
import './styles/App.css';

const App: React.FC = () => {
  const { data, loading } = useFetchData();
  const [filters, setFilters] = useState({ timeRange: 'day' });

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const dayWiseActivityData = transformToDayWiseActivity(data as AuthorWorklogRow[]);
  const summaryStatistics = getSummaryStatistics(dayWiseActivityData);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Activity Dashboard</h1>
      </header>
      <main>

        <SummaryStats data={summaryStatistics} />
        <ActivityChart data={dayWiseActivityData} />
        <ActivityTable data={data as AuthorWorklogRow[]} />
      </main>
    </div>
  );
};

export default App;
