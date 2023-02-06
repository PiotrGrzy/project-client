// import { zodResolver } from '@hookform/resolvers/zod';
// import { Button, div, Typography } from '@mui/material';
// import Form from 'components/ui/Form';
// import TextFormInput from 'components/ui/TextFormInput';
// import { SignInUserInput, signInUserSchema } from 'models/signIn.schema';
// import { useState } from 'react';
// import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { Paths } from 'routes/paths';
// import { signInUser } from 'services/users.service';
// import * as z from 'zod';

// const defaultValues = {
//   email: '',
//   password: '',
// };

// function SignInView() {
//   const [loginError, setLoginError] = useState('');
//   const formMethods = useForm<SignInUserInput>({
//     resolver: zodResolver(signInUserSchema),
//     defaultValues,
//     mode: 'onBlur',
//     reValidateMode: 'onChange',
//   });

//   const onSubmit: SubmitHandler<SignInUserInput> = async (data) => {
//     try {
//       await signInUser(data);
//     } catch (e: any) {
//       setLoginError(e.message);
//     }
//   };

//   return (
//     <div
//       mt={2}
//       sx={{
//         p: 5,
//         borderRadius: 2,
//       }}
//     >
//       <FormProvider {...formMethods}>
//         <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
//           <Typography component="h1" variant="h5" mb={2}>
//             Sign In Form
//           </Typography>
//           <TextFormInput name="email" label="Email" />
//           <TextFormInput name="password" label="Password" />
//           <Button type="submit" variant="contained">
//             Sign In
//           </Button>
//           <Typography component="p">{loginError}</Typography>
//           <Typography component="p" textAlign="center">
//             Need new account?<Link to={Paths.SIGN_UP}>Sign up</Link>
//           </Typography>
//         </Form>
//       </FormProvider>
//     </div>
//   );
// }

// export default SignInView;
export {};
