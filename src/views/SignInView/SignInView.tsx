import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Form from '@/components/ui/Form';
import TextFormInput from '@/components/ui/TextFormInput';
import { SignInUserInput, signInUserSchema } from '@/models/signIn.schema';
import { Paths } from '@/routes/paths';
import { signInUser, useUserQuery } from '@/services/users.service';

const defaultValues = {
  email: '',
  password: '',
};
function SignInView() {
  // const user = useUserQuery();
  const queryClient = useQueryClient();
  const signin = useMutation({
    mutationFn: (data: SignInUserInput) => signInUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (err: AxiosError) => err,
  });
  const formMethods = useForm<SignInUserInput>({
    resolver: zodResolver(signInUserSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignInUserInput> = async (data) => {
    signin.mutate(data);
  };

  // if (user.data) {
  //   return <Navigate to={Paths.DASHBOARD} replace />;
  // }

  return (
    <div className="flex justify-center items-center h-full">
      <FormProvider {...formMethods}>
        <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <TextFormInput name="email" label="Email" placeholder="email" />
          <TextFormInput name="password" label="Password" placeholder="password" />
          <div className="form-control mt-4">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          </div>
          <p className="text-error">{signin.isError ? signin.error?.response?.data : ''}</p>
          <p className="text-center">
            <span className="mr-1"> Need new account?</span> <Link to={Paths.SIGN_UP}>Sign up</Link>
          </p>
        </Form>
      </FormProvider>
    </div>
  );
}

export default SignInView;
