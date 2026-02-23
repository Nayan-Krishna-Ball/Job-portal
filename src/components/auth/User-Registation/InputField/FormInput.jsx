//

import { useFormContext } from "react-hook-form";
import FormError from "./FormError";

const FormInput = ({
  name,
  label,
  starMark,
  type = "text",
  placeholder,
  icon: Icon,
  rules,
  children,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <label htmlFor="name" className="label">
        {label} <span className="text-red-500">{starMark}</span>
      </label>
      <div className="relative mt-2">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        )}
        <input
          type={type}
          id={name}
          {...register(name, rules)}
          className={`input pl-10 ${errors?.[name] ? "border-red-600" : ""}`}
          placeholder={placeholder}
        />
        {children}
      </div>
      <FormError errors={errors[name]} />
    </div>
  );
};

export default FormInput;
