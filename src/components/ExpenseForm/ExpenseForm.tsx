import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Form from '@/components/ui/Form';
import Select from '@/components/ui/Select';
import TextFormInput from '@/components/ui/TextFormInput';
import { useModal } from '@/context/modalContext';
import { expenseSchema, ExpenseUserInput } from '@/models/expense.schema';
import { useAddExpense, useUpdateExpense } from '@/services/expenses.service';
import { getFormDirtyValues } from '@/utils/common';

import { expenseCategoryOptions, initialValues, intervalTypeOptions } from './expenseForm.utils';

const ExpenseForm = () => {
  const { selectedTransaction: selectedExpense, closeModal } = useModal();
  const addExpense = useAddExpense();
  const updateExpense = useUpdateExpense(selectedExpense?._id);

  const formMethods = useForm<ExpenseUserInput>({
    resolver: zodResolver(expenseSchema),
    defaultValues: selectedExpense || initialValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<ExpenseUserInput> = async (data) => {
    if (selectedExpense) {
      const {
        formState: { dirtyFields },
      } = formMethods;

      const changedData = getFormDirtyValues(dirtyFields, data) as ExpenseUserInput;
      return updateExpense.mutate(changedData, { onSuccess: closeModal });
    }
    addExpense.mutate(data, { onSuccess: closeModal });
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <h1> {selectedExpense ? 'Edit expense' : 'Add new expense'}</h1>
          <TextFormInput name="title" label="Title" />
          <TextFormInput name="description" label="Description" />
          <Select name="category" label="Category" options={expenseCategoryOptions} />
          <Select name="type" label="Type" options={intervalTypeOptions} />
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
