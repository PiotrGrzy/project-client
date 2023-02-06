// import { zodResolver } from '@hookform/resolvers/zod';
// import { Button, div, Typography } from '@mui/material';
// import Form from 'components/ui/Form';
// import TextFormInput from 'components/ui/TextFormInput';
// import { useState } from 'react';
// import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { Paths } from 'routes/paths';
// import { createUser } from 'services/users.service';
// import * as z from 'zod';

// import { CreateUserInput, createUserSchema } from '../../models/signup.schema';

// const defaultValues = {
//   firstName: '',
//   lastName: '',
//   password: '',
//   passwordConfirmation: '',
//   email: '',
// };

// function SignUpView() {
//   const [registerError, setRegisterError] = useState('');
//   const formMethods = useForm<CreateUserInput>({
//     resolver: zodResolver(createUserSchema),
//     defaultValues,
//     mode: 'onBlur',
//     reValidateMode: 'onChange',
//   });

//   const onSubmit: SubmitHandler<CreateUserInput> = async (data) => {
//     try {
//       await createUser(data);
//     } catch (e: any) {
//       console.log(e);

//       setRegisterError(e.message);
//     }
//   };

//   return (
//     <div>
//       <FormProvider {...formMethods}>
//         <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
//           <Typography component="h1" variant="h5" mb={2}>
//             Register Form
//           </Typography>
//           <TextFormInput name="firstName" label="First name" />
//           <TextFormInput name="lastName" label="Last name" />
//           <TextFormInput name="password" label="Password" />
//           <TextFormInput name="passwordConfirmation" label="Password confirmation" />
//           <TextFormInput name="email" label="Email" />
//           <Button type="submit" variant="contained">
//             Create user
//           </Button>
//           <Typography component="p">{registerError}</Typography>
//           <Typography component="p" textAlign="center">
//             Already got an account?
//             <Link to={Paths.SIGN_IN}>Sign in</Link>
//           </Typography>
//         </Form>
//       </FormProvider>
//     </div>
//   );
// }

// export default SignUpView;
export {};
