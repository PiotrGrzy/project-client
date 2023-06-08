import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Form from '@/components/ui/Form';
import TextFormInput from '@/components/ui/TextFormInput';
import { CreateUserInput, createUserSchema } from '@/models/signup.schema';
import { Paths } from '@/routes/paths';
import { createUser } from '@/services/users.service';

const defaultValues = {
  firstName: '',
  lastName: '',
  password: '',
  passwordConfirmation: '',
  email: '',
};

function SignUpView() {
  const [registerError, setRegisterError] = useState('');
  const formMethods = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<CreateUserInput> = async (data) => {
    try {
      await createUser(data);
    } catch (e: any) {
      console.log(e);

      setRegisterError(e.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <FormProvider {...formMethods}>
        <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <TextFormInput name="firstName" label="First name" />
          <TextFormInput name="lastName" label="Last name" />
          <TextFormInput name="password" label="Password" />
          <TextFormInput name="passwordConfirmation" label="Password confirmation" />
          <TextFormInput name="email" label="Email" />
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
          <p className="text-error">{registerError}</p>
          <p className="text-center">
            Already got an account? <Link to={Paths.SIGN_IN}>Sign in</Link>
          </p>
        </Form>
      </FormProvider>
    </div>
  );
}

export default SignUpView;
