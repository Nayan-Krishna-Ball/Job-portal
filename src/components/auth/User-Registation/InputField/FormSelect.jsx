//

import { useFormContext } from "react-hook-form";
import FormError from "./FormError";

const FormSelect = ({ name, label, options, rules, starMark, icon: Icon }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-2">
      <label htmlFor="experience" className="label">
        {label} <span className="text-red-500">{starMark}</span>
      </label>
      <div className="relative mt-2">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        )}
        <select
          id="experience"
          {...register(name, rules)}
          // className="input pl-10 "
          className={`input pl-10 ${errors?.[name] ? "border-red-600" : ""}`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <FormError errors={errors[name]} />
    </div>
  );
};

export default FormSelect;
