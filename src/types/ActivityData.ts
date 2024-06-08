// ActivityData.ts

export interface ActivityItem {
  count: string;
  label: string;
  fillColor: string;
}

export interface DayWiseActivity {
  date: string;
  items: {
    children: ActivityItem[];
  };
}

export interface TotalActivity {
  name: string;
  value: string;
}

export interface ActiveDays {
  days: number;
  isBurnOut: boolean;
  insight: string[];
}

export interface AuthorWorklogRow {
  name: string;
  totalActivity: TotalActivity[];
  dayWiseActivity: DayWiseActivity[];
  activeDays: ActiveDays;
}

export interface ActivityMeta {
  label: string;
  fillColor: string;
}

export interface AuthorWorklog {
  activityMeta: ActivityMeta[];
  rows: AuthorWorklogRow[];
}

// Define and export the UserActivity interface
export interface UserActivity {
  authorWorklog: AuthorWorklog;
}
