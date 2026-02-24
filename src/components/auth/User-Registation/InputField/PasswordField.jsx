//

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import FormError from "./FormError";

const PasswordField = ({
  name,
  label,
  rules,
  placeholder,
  icon: Icon,
  starMark,
}) => {
  const [show, setShow] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <label htmlFor="password" className="label">
        {label}
        <span className="text-red-500">{starMark}</span>
      </label>
      <div className="relative mt-2">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        )}
        <input
          type={show ? "text" : "password"}
          id="password"
          {...register(name, rules)}
          // className="input pl-10 pr-10"
          className={`input pl-10 ${errors?.[name] ? "border-red-600" : ""}`}
          placeholder={placeholder}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      <FormError errors={errors[name]} />
    </div>
  );
};

export default PasswordField;
