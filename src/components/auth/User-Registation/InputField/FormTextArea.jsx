//

import { useFormContext } from "react-hook-form";
import FormError from "./FormError";

const FormTextArea = ({
  name,
  label,
  starMark,
  type = "text",
  placeholder,
  helperText,
  rules,
  children,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <label htmlFor="description" className="label">
        {label}
        <span className="text-red-500">{starMark}</span>
      </label>
      <div className="relative mt-2">
        <textarea
          type={type}
          id={name}
          name={name}
          {...register(name, rules)}
          className="textarea min-h-30 "
          placeholder={placeholder}
        ></textarea>

        {helperText && (
          <p className="text-xs text-muted-foreground mt-1.5">{helperText}</p>
        )}

        {children}
      </div>
      <FormError errors={errors[name]} />
    </div>
  );
};

export default FormTextArea;
