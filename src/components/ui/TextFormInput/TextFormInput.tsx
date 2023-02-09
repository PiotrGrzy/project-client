import classNames from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';

type FormInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

const TextInput = ({ name, label, placeholder = '', ...otherProps }: FormInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className="form-control">
            <label className="label" htmlFor={name}>
              <span className="label-text">{label}</span>
            </label>
            <input
              type="text"
              placeholder={placeholder}
              className={classNames('input input-bordered input-primary', errors[name] ? 'border-error' : '')}
              {...field}
              {...otherProps}
              id={name}
            />
            <p className="text-error mt-1">{errors[name] ? (errors[name]?.message as unknown as string) : ' '}</p>
          </div>
        );
      }}
    />
  );
};

export default TextInput;
