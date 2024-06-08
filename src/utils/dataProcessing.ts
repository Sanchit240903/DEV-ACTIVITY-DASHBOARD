// utils/dataProcessing.ts
import { AuthorWorklogRow, DayWiseActivity } from '../types/ActivityData';

export const processActivityData = (data: any): DayWiseActivity[] => {
  // Aggregate data or perform other necessary transformations
  return data.data.AuthorWorklog.rows[0].dayWiseActivity;
};

export const getSummaryStatistics = (data: DayWiseActivity[]): { label: string; count: number }[] => {
  const summary: { [key: string]: number } = {};

  data.forEach((day) => {
    day.items.children.forEach((item) => {
      if (!summary[item.label]) {
        summary[item.label] = 0;
      }
      summary[item.label] += parseInt(item.count, 10);
    });
  });

  return Object.entries(summary).map(([label, count]) => ({ label, count }));
};

export const transformToDayWiseActivity = (rows: AuthorWorklogRow[]): DayWiseActivity[] => {
  return rows.flatMap((row) => row.dayWiseActivity);
};
