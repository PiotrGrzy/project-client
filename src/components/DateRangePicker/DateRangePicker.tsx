import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

export type DateType = string | null | Date;

export type DateRangeType = {
  startDate: DateType;
  endDate: DateType;
};
export type DateValueType = DateRangeType | null;

const DateRangePicker = () => {
  const [value, setValue] = useState<DateRangeType>({
    startDate: new Date(),
    endDate: new Date().setMonth(11).toString(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    if (newValue) {
      setValue(newValue);
    }
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
