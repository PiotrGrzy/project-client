import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const DateRangePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <Section className="mb-4">
      <SectionTitle>Select date range</SectionTitle>
      <Datepicker
        value={value}
        onChange={handleValueChange}
        startWeekOn="mon"
        primaryColor="amber"
        showShortcuts={true}
        inputClassName="dark:bg-amber-800/20"
        separator="to"
      />
    </Section>
  );
};

export default DateRangePicker;
