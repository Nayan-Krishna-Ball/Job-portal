//
import { Calendar, Lock, LogIn, Mail } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { sendPostLogin } from "../../services/getServices";
import FormInput from "./User-Registation/InputField/FormInput";
import FormSelect from "./User-Registation/InputField/FormSelect";
import PasswordField from "./User-Registation/InputField/PasswordField";

const LoginFormFil = () => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const formData = {
        role: data.role,
        email: data.email,
        password: data.password,
      };
      const response = await sendPostLogin(formData);

      console.log("Success:", response.data);

      login(response.data.data);
      if (response.data.data.role === "USER") {
        navigate("/");
      } else if (response.data.data.role === "COMPANY") {
        navigate("/company-dashboard");
      }

      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
        {/* <!-- Email --> */}

        <FormInput
          name="email"
          label="Email"
          type="email"
          starMark="*"
          placeholder="john@example.com"
          icon={Mail}
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          }}
        />

        {/* <!-- Password --> */}

        <PasswordField
          name="password"
          label="Password"
          starMark=" * "
          icon={Lock}
          placeholder="Enter your password"
          rules={{
            required: "Password is required",
            minLength: { value: 8, message: "Minimum 8 characters" },
          }}
        />

        <FormSelect
          name="role"
          label=" Login As"
          starMark=" * "
          icon={Calendar}
          rules={{ required: "Role is required" }}
          options={[
            { value: "", label: "Select Role" },
            { value: "USER", label: "Job Seeker" },
            { value: "COMPANY", label: "Company" },
          ]}
        />

        {/* <!-- Submit Button --> */}
        <button type="submit" className="btn btn-primary w-full text-base h-11">
          <LogIn className="h-4 w-4 mr-2" />
          Sign In
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginFormFil;
