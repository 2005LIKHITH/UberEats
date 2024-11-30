import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import {  Loader2, LockKeyhole, Mail, PhoneCall, User } from "lucide-react";
import { Link } from "react-router-dom";

import { FormEvent, useState } from "react";


const Signup = () => {
  const loading = false;
  const [input, setInput] = useState<SignupInputState>({
    email: "",
    password: "",
    fullName: "",
    contactNumber: "",
  });
  const [errors, setErrors] = useState<Partial<SignupInputState>>({});

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userSignupSchema.safeParse(input);
    if(!result.success){
        const fieldErrors = result.error.flatten().fieldErrors;
        setErrors(fieldErrors as Partial<SignupInputState>);
        return
    }

    console.log(input);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold">UberEats</h1>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              name="fullName"
              onChange={changeEventHandler}
              value={input.fullName}
              placeholder="Full Name"
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName[0]}</p>
                )
            }
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              name="email"
              onChange={changeEventHandler}
              value={input.email}
              placeholder="Email"
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
                )
            }
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              name="password"
              onChange={changeEventHandler}
              value={input.password}
              placeholder="Password"
              className="pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password[0]}</p>
                )
            }
          </div>
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="tel"
              name="contactNumber"
              onChange={changeEventHandler}
              value={input.contactNumber}
              placeholder="Contact Number"
              className="pl-10 focus-visible:ring-1"
            />
            <PhoneCall className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors.contactNumber && (
                    <p className="text-red-500 text-xs mt-1">{errors.contactNumber[0]}</p>
                )
            }
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-10">
          {loading ? (
            <Button disabled className="bg-orange hover:bg-orangeHover w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-orange hover:bg-orangeHover w-full"
            >
              Sign Up
            </Button>
          )}
        </div>

        <Separator />

        {/* Login Link */}
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
