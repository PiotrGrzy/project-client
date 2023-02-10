import { ReactNode } from 'react';

interface FormProps {
  onSubmit: () => void;
  children: ReactNode;
}

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className="card w-full max-w-lg shadow-2xl bg-base-100" onSubmit={onSubmit}>
      <div className="card-body gap-0">{children}</div>
    </form>
  );
};

export default Form;
