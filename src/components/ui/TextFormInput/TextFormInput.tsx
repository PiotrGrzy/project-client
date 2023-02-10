import classNames from 'classnames';
import { HTMLInputTypeAttribute } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface TextInputProps {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

const TextInput = ({ name, label, placeholder = '', type = 'text', ...otherProps }: TextInputProps) => {
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
          <div className="form-control relative pb-7">
            <label className="label pt-0.5" htmlFor={name}>
              <span className="label-text">{label}</span>
            </label>
            <input
              type={type}
              placeholder={placeholder}
              className={classNames('input input-bordered input-primary', errors[name] ? 'border-error' : '')}
              {...field}
              {...otherProps}
              id={name}
            />
            <p className="text-error absolute bottom-0">
              {errors[name] ? (errors[name]?.message as unknown as string) : ' '}
            </p>
          </div>
        );
      }}
    />
  );
};

export default TextInput;
