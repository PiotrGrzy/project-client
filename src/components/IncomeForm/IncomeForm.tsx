import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Form from '@/components/ui/Form';
import Select from '@/components/ui/Select';
import TextFormInput from '@/components/ui/TextFormInput';
import { useModal } from '@/context/modalContext';
import { incomeSchema, IncomeUserInput } from '@/models/income.schema';
import { addIncome, updateIncome } from '@/services/income.service';
import { getFormDirtyValues } from '@/utils/common';

import { intervalTypeOptions } from '../ExpenseForm/expenseForm.utils';

const initialValues: IncomeUserInput = {
  title: '',
  type: 'once',
  value: 0,
};

const IncomeForm = () => {
  const { selectedTransaction: selectedIncome, closeModal } = useModal();
  const queryClient = useQueryClient();
  const expense = useMutation({
    mutationFn: selectedIncome
      ? (data: Partial<IncomeUserInput>) => updateIncome(data, selectedIncome._id)
      : (data: IncomeUserInput) => addIncome(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['incomes'] });
    },
    onError: (err: AxiosError) => err,
  });

  const formMethods = useForm<IncomeUserInput>({
    resolver: zodResolver(incomeSchema),
    defaultValues: selectedIncome || initialValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<IncomeUserInput> = async (data) => {
    if (selectedIncome) {
      const {
        formState: { dirtyFields, isDirty },
      } = formMethods;
      // TODO check why isDirty is always false
      const changedData = getFormDirtyValues(dirtyFields, data) as IncomeUserInput;
      return expense.mutate(changedData, { onSuccess: closeModal });
    }
    expense.mutate(data, { onSuccess: closeModal });
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <h1> {selectedIncome ? 'Edit income' : 'Add new income'}</h1>
          <TextFormInput name="title" label="Title" />

          <Select name="type" label="Type" options={intervalTypeOptions} />
          <TextFormInput name="value" label="Value" type="number" />
          <button className="btn btn-primary" type="submit">
            Add Income
          </button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default IncomeForm;
