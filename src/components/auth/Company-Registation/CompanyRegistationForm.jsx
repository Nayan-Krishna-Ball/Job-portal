//
import {
  Briefcase,
  Building,
  Building2,
  Calendar,
  Globe,
  Lock,
  Mail,
  MapPin,
  Shield,
  User,
} from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { sendPostRegister } from "../../../services/getServices";
import FormInput from "../User-Registation/InputField/FormInput";
import FormSelect from "../User-Registation/InputField/FormSelect";
import FormTextArea from "../User-Registation/InputField/FormTextArea";
import PasswordField from "../User-Registation/InputField/PasswordField";

const CompanyRegistationForm = () => {
  const methods = useForm();
  const { handleSubmit, reset, getValues } = methods;

  const handleRegisterCompany = async (data) => {
    try {
      const fromData = {
        role: "COMPANY",
        name: data.name,
        websiteUrl: data.websiteUrl,
        industry: data.industry,
        foundedYear: data.foundedYear,
        employeeCount: data.employeeCount,
        location: data.location,
        description: data.description,
        email: data.email,
        password: data.password,
      };

      const response = await sendPostRegister(fromData);

      console.log("Susccess:", response.data);
      reset();
    } catch (error) {
      console.log(error.meassage);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleRegisterCompany)}
        className="space-y-6"
      >
        {/* <!-- Company Information Section --> */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-[hsl(var(--color-border))]">
            <Building className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Company Information</h2>
          </div>

          {/* <!-- Company Name --> */}
          <FormInput
            name="name"
            label="Company name"
            starMark=" * "
            icon={Building2}
            placeholder="e.g., TechCorp Solutions"
            rules={{
              required: {
                value: true,
                message: "Company is required",
              },
            }}
          />

          {/* email */}

          <FormInput
            name="email"
            label="Email Address"
            starMark=" * "
            icon={Mail}
            placeholder="john.doe@company.com"
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

          {/* <!-- Company Website & Industry Row --> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormInput
              name="websiteUrl"
              label="Company Website"
              starMark=" * "
              icon={Globe}
              placeholder="https://example.com"
              rules={{
                required: {
                  value: true,
                  message: "Company website is required",
                },
                pattern: {
                  value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
                  message: "Enter a valid website URL",
                },
              }}
            />

            {/* select */}
            <FormSelect
              name="industry"
              label="Industry"
              icon={Briefcase}
              rules={{ required: "Industry is required" }}
              options={[
                { value: "", label: "Select industry" },
                { value: "technology", label: "Technology" },
                { value: "finance", label: "Finance & Banking" },
                { value: "healthcare", label: "Healthcare" },
                { value: "education", label: "Education" },
                { value: "retail", label: "Retail & E-commerce" },
                { value: "manufacturing", label: "Manufacturing" },
                { value: "consulting", label: "Consulting" },
                { value: "marketing", label: "Marketing & Advertising" },
                { value: "other", label: "Other" },
              ]}
            />
          </div>

          {/* <!-- Company Size & Founded Year Row --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormSelect
              name="employeeCount"
              label="Company Size"
              icon={User}
              rules={{ required: "Company Size is required" }}
              options={[
                { value: "", label: "Select company size" },
                { value: "1-10", label: "1-10 employees" },
                { value: "11-50", label: "11-50 employees" },
                { value: "51-200", label: "51-200 employees" },
                { value: "201-500", label: "201-500 employees" },
                { value: "501-1000", label: "501-1000 employees" },
                { value: "1000+", label: "1000+ employees" },
              ]}
            />

            <FormInput
              name="foundedYear"
              label="Founded Year"
              type="number"
              starMark=" * "
              icon={Calendar}
              placeholder="e.g., 2010"
              rules={{
                required: {
                  value: true,
                  message: "Founded year is required",
                },
                min: {
                  value: 1800,
                  message: "Year must be after 1800",
                },
                max: {
                  value: new Date().getFullYear(),
                  message: "Year cannot be in the future",
                },
              }}
            />
          </div>

          {/* <!-- Company Location --> */}

          <FormInput
            name="location"
            type="text"
            label="Headquarters Location"
            starMark=" * "
            icon={MapPin}
            placeholder="City, Country"
            rules={{
              required: {
                value: true,
                message: "Headquarters location is required",
              },
              minLength: {
                value: 2,
                message: "Location must be at least 2 characters",
              },
            }}
          />

          {/* <!-- Company Description --> */}
          <FormTextArea
            name="description"
            label="Company Description"
            starMark=" * "
            placeholder="Tell us about your company, mission, and what makes it a great place to work..."
            helperText="Minimum 100 characters. This will be displayed on your company profile."
            rules={{
              required: {
                value: true,
                message: "Company description is required",
              },
              minLength: {
                value: 100,
                message: "Description must be at least 100 characters",
              },
            }}
          />
        </div>

        {/* <!-- Account Security Section --> */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-[hsl(var(--color-border))]">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Account Security</h2>
          </div>

          {/* <!-- Password Fields Row --> */}

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
        </div>

        {/* <!-- Terms and Conditions --> */}
        <div className="space-y-3 pt-2">
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

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="verified"
              name="verified"
              className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
              required
            />
            <label htmlFor="verified" className="text-sm text-muted-foreground">
              I confirm that I am an authorized representative of this company
              and have the right to register on its behalf
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="updates"
              name="updates"
              className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
            />
            <label htmlFor="updates" className="text-sm text-muted-foreground">
              Send me product updates, hiring tips, and promotional offers via
              email
            </label>
          </div>
        </div>

        {/* <!-- Submit Button --> */}
        <button
          type="submit"
          className="btn btn-primary w-full text-base h-11 mt-2"
        >
          <Building2 className="h-4 w-4 mr-2" />
          Register Company
        </button>
      </form>
    </FormProvider>
  );
};

export default CompanyRegistationForm;
