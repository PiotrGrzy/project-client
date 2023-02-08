import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

import Form from '@/components/ui/Form';
import TextFormInput from '@/components/ui/TextFormInput';
import { SignInUserInput, signInUserSchema } from '@/models/signIn.schema';
import { Paths } from '@/routes/paths';
import { signInUser } from '@/services/users.service';

const defaultValues = {
  email: '',
  password: '',
};

function SignInView() {
  const [loginError, setLoginError] = useState('');
  const formMethods = useForm<SignInUserInput>({
    resolver: zodResolver(signInUserSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignInUserInput> = async (data) => {
    console.log(data);
    try {
      await signInUser(data);
    } catch (e: any) {
      setLoginError(e.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <FormProvider {...formMethods}>
        <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <TextFormInput name="email" label="Email" placeholder="email" />
          <TextFormInput name="password" label="Password" placeholder="password" />
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          </div>
          <p>{loginError}</p>
          <p className="text-center">
            <span className="mr-1"> Need new account?</span> <Link to={Paths.SIGN_UP}>Sign up</Link>
          </p>
        </Form>
      </FormProvider>
    </div>
  );
}

export default SignInView;
export {};
