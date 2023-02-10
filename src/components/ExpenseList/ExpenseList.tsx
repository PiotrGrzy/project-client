import { Expense } from '@/services/expenses.service';
import { useExpenseQuery } from '@/services/expenses.service';

import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';

const ExpenseList = () => {
  const expenses = useExpenseQuery();
  return (
    <ul className="shadow-2xl bg-secondary p-2 rounded-md">
      <p className="font-semibold text-xl">Last Expenses: </p>
      {expenses.data.map((expense) => (
        <ExpenseListItem expense={expense} key={expense._id} />
      ))}
    </ul>
  );
};

export default ExpenseList;
