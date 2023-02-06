// import { zodResolver } from '@hookform/resolvers/zod';
// import { useState } from 'react';
// import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import * as z from 'zod';

// import Form from '@/components/ui/Form';
// import TextFormInput from '@/components/ui/TextFormInput';
// import { expenseSchema, ExpenseUserInput } from '@/models/expense.schema';
// import { Paths } from '@/routes/paths';
// import { addExpense } from '@/services/expenses.service';

// const defaultValues: ExpenseUserInput = {
//   title: '',
//   description: '',
//   category: '',
//   type: 'once',
//   cost: 0,
// };

// const AddExpenseForm = () => {
//   const [addExpenseError, setAddExpenseError] = useState('');
//   const formMethods = useForm<ExpenseUserInput>({
//     resolver: zodResolver(expenseSchema),
//     defaultValues,
//     mode: 'onBlur',
//     reValidateMode: 'onChange',
//   });

//   const onSubmit: SubmitHandler<ExpenseUserInput> = async (data) => {
//     try {
//       await addExpense(data);
//     } catch (e: any) {
//       setAddExpenseError(e.message);
//     }
//   };

//   return (
//     <div>
//       <FormProvider {...formMethods}>
//         <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
//           <h1>Add new expense</h1>
//           <TextFormInput name="title" label="Title" />
//           <TextFormInput name="description" label="Description" />
//           <TextFormInput name="category" label="Category" />
//           <TextFormInput name="type" label="Type" />
//           <TextFormInput name="cost" label="Cost" />
//           <button type="submit">Save</button>
//           <p>{addExpenseError}</p>
//         </Form>
//       </FormProvider>
//     </div>
//   );
// };

// export default AddExpenseForm;
export {};
