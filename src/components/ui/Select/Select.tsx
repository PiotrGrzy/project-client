import { Controller, useFormContext } from 'react-hook-form';

type Option = {
  value: string | number;
  label: string;
};

interface SelectProps {
  name: string;
  label: string;
  options: Option[];
}

const Select = ({ name, label, options, ...otherProps }: SelectProps) => {
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
          <div className="form-control w-full relative pb-7">
            <label className="label" htmlFor={name}>
              <span className="label-text">{label}</span>
            </label>
            <select id={name} className="select select-bordered" {...field} {...otherProps}>
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <p className="text-error absolute bottom-0">
              {errors[name] ? (errors[name]?.message as unknown as string) : ' '}
            </p>
          </div>
        );
      }}
    />
  );
};

export default Select;
