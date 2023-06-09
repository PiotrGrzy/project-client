import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Form from '@/components/ui/Form';
import Select from '@/components/ui/Select';
import TextFormInput from '@/components/ui/TextFormInput';
import { useModal } from '@/context/modalContext';
import { incomeSchema, IncomeUserInput } from '@/models/income.schema';
import { useAddIncome, useUpdateIncome } from '@/services/income.service';
import { getFormDirtyValues } from '@/utils/common';

import { intervalTypeOptions } from '../ExpenseForm/expenseForm.utils';

const initialValues: IncomeUserInput = {
  title: '',
  type: 'once',
  value: 0,
};

const IncomeForm = () => {
  const { selectedTransaction: selectedIncome, closeModal } = useModal();
  const addIncome = useAddIncome();
  const updateIncome = useUpdateIncome(selectedIncome?._id);

  const formMethods = useForm<IncomeUserInput>({
    resolver: zodResolver(incomeSchema),
    defaultValues: selectedIncome || initialValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<IncomeUserInput> = async (data) => {
    if (selectedIncome) {
      const {
        formState: { dirtyFields },
      } = formMethods;
      const changedData = getFormDirtyValues(dirtyFields, data) as IncomeUserInput;
      return updateIncome.mutate(changedData, { onSuccess: closeModal });
    }
    addIncome.mutate(data, { onSuccess: closeModal });
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
