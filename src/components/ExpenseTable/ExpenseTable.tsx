import ExpenseTableItem from '@/components/ExpenseTableItem';
import { Expense, useExpenseQuery } from '@/services/expenses.service';

const ExpenseList = ({ openEditModal }: { openEditModal: (Expense: Expense) => void }) => {
  const expenses = useExpenseQuery();
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.data.map((expense) => (
            <ExpenseTableItem expense={expense} key={expense._id} openEditModal={openEditModal} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
