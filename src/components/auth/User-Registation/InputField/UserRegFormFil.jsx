//

import { Calendar, Lock, Mail, Phone, User, UserPlus } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { sendPostRegister } from "../../../../services/getServices";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import PasswordField from "./PasswordField";

const UserRegFormFil = () => {
  const methods = useForm();
  const { handleSubmit, reset, getValues } = methods;

  const handleRegister = async (data) => {
    try {
      const formData = {
        role: "USER",
        name: data.name,
        email: data.email,
        phone: data.phone,
        title: data.title || "Developer",
        experience: data.experience,
        location: data.location || "Remote",
        password: data.password,
      };
      const response = await sendPostRegister(formData);

      console.log("Success:", response.data);
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
        {/* Name field */}

        <FormInput
          name="name"
          label="Name"
          starMark=" * "
          placeholder="John"
          icon={User}
          rules={{
            required: {
              value: true,
              message: "Name is required",
            },
          }}
        />

        {/* Email & Phone Row */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            name="email"
            label="Email address"
            type="email"
            starMark="*"
            placeholder="john@example.com"
            icon={Mail}
            rules={{
              required: {
                value: true,
                message: "Invalid email",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
          />

          <FormInput
            name="phone"
            label="Phone Number "
            starMark="*"
            type="tel"
            placeholder="+1 (555) 000-0000"
            icon={Phone}
            rules={{
              required: {
                value: true,
                message: "Phone is required",
              },
            }}
          />
        </div>

        {/* Select */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormSelect
            name="experience"
            label="Years of Experience"
            icon={Calendar}
            rules={{ required: "Experience is required" }}
            options={[
              { value: "", label: "Select experience" },
              { value: "entry", label: "Entry (0-2 years)" },
              { value: "mid", label: "Mid (3-5 years)" },
              { value: "senior", label: "Senior (6-10 years)" },
              { value: "expert", label: "Expert (10+ years))" },
            ]}
          />
        </div>

        {/* Password and confirm password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <PasswordField
            name="password"
            label="Password"
            starMark=" * "
            icon={Lock}
            placeholder="Create a strong password"
            rules={{
              required: "Password is required",
              minLength: { value: 8, message: "Minimum 8 characters" },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "Must contain letters and numbers",
              },
            }}
          />

          <PasswordField
            name="confirmPassword"
            label="Confirm Password"
            starMark=" * "
            icon={Lock}
            placeholder="Create a strong password"
            rules={{
              required: "Confirm password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            }}
          />
        </div>

        <p className="text-xs text-muted-foreground -mt-2">
          Password must be at least 8 characters with letters and numbers
        </p>
        {/* Terms and Conditions  */}

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
            required
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>
            and
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {/* <!-- Newsletter Subscription --> */}
        {/* <!-- Submit Button --> */}
        <button
          type="submit"
          className="btn btn-primary w-full text-base h-11 mt-2"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Create Account
        </button>
      </form>
    </FormProvider>
  );
};

export default UserRegFormFil;
