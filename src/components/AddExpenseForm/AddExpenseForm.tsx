import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

import Form from '@/components/ui/Form';
import Select from '@/components/ui/Select';
import TextFormInput from '@/components/ui/TextFormInput';
import { CategoryType, expenseSchema, ExpenseType, ExpenseUserInput } from '@/models/expense.schema';
import { Paths } from '@/routes/paths';
import { addExpense } from '@/services/expenses.service';

const defaultValues: ExpenseUserInput = {
  title: '',
  description: '',
  category: '',
  type: 'once',
  cost: 0,
};

const expenseTypeOptions: { value: ExpenseType; label: string }[] = [
  { value: 'once', label: 'Once' },
  { value: 'daily', label: 'Daily' },
];

const expenseCategoryOptions: { value: CategoryType; label: string }[] = [
  { value: 'food', label: 'Food' },
  { value: 'car', label: 'Car' },
];

const AddExpenseForm = () => {
  const [addExpenseError, setAddExpenseError] = useState('');
  const formMethods = useForm<ExpenseUserInput>({
    resolver: zodResolver(expenseSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<ExpenseUserInput> = async (data) => {
    console.log('DATA', data);
    try {
      await addExpense(data);
    } catch (e: any) {
      setAddExpenseError(e.message);
    }
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <h1>Add new expense</h1>
          <TextFormInput name="title" label="Title" />
          <TextFormInput name="description" label="Description" />
          <Select name="category" label="Category" options={expenseCategoryOptions} />
          <Select name="type" label="Type" options={expenseTypeOptions} />
          <TextFormInput name="cost" label="Cost" type="number" />
          <button className="btn btn-primary" type="submit">
            Add expense
          </button>
          <p>{addExpenseError}</p>
        </Form>
      </FormProvider>
    </div>
  );
};

export default AddExpenseForm;
