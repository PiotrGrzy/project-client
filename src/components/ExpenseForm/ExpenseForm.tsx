import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Form from '@/components/ui/Form';
import Select from '@/components/ui/Select';
import TextFormInput from '@/components/ui/TextFormInput';
import { expenseSchema, ExpenseUserInput } from '@/models/expense.schema';
import { addExpense, Expense, updateExpense } from '@/services/expenses.service';

import { expenseCategoryOptions, expenseTypeOptions, getDirtyValues, initialValues } from './expenseForm.utils';

interface ExpenseFormProps {
  closeModal: () => void;
  selectedExpense: Expense | null;
}

const ExpenseForm = ({ closeModal, selectedExpense }: ExpenseFormProps) => {
  const queryClient = useQueryClient();
  const expense = useMutation({
    mutationFn: selectedExpense
      ? (data: Partial<ExpenseUserInput>) => updateExpense(data, selectedExpense._id)
      : (data: ExpenseUserInput) => addExpense(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
    onError: (err: AxiosError) => err,
  });

  const formMethods = useForm<ExpenseUserInput>({
    resolver: zodResolver(expenseSchema),
    defaultValues: selectedExpense || initialValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<ExpenseUserInput> = async (data) => {
    if (selectedExpense) {
      const {
        formState: { dirtyFields, isDirty },
      } = formMethods;
      // TODO check why isDirty is always false
      const changedData = getDirtyValues(dirtyFields, data) as Partial<ExpenseUserInput>;
      return expense.mutate(changedData, { onSuccess: closeModal });
    }
    console.log('ADD NEW EXPENSE REQUEST', data);
    expense.mutate(data, { onSuccess: closeModal });
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <h1> {selectedExpense ? 'Edit expense' : 'Add new expense'}</h1>
          <TextFormInput name="title" label="Title" />
          <TextFormInput name="description" label="Description" />
          <Select name="category" label="Category" options={expenseCategoryOptions} />
          <Select name="type" label="Type" options={expenseTypeOptions} />
          <TextFormInput name="cost" label="Cost" type="number" />
          <button className="btn btn-primary" type="submit">
            {selectedExpense ? 'Save changes' : 'Add expense'}
          </button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default ExpenseForm;
