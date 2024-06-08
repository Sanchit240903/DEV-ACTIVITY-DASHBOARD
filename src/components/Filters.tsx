import React from 'react';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div>
      <label>
        Select Time Range:
        <select name="timeRange" onChange={handleChange}>
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
