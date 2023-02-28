import React from 'react';

import IncomeTable from '@/components/IncomeTable';

const IncomesView = () => {
  return (
    <div>
      <IncomeTable
        openEditModal={() => {
          console.log('open modal');
        }}
      />
    </div>
  );
};

export default IncomesView;
