import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"


import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { userLoginSchema } from "@/schema/userSchema";


type LoginInputState = {
    email: string;
    password: string;
}
const Login = () => {
    const loading = false
    const [input, setInput] = useState<LoginInputState>({
        email: "",
        password: "",

    })
    const [errors, setErrors] = useState<Partial<LoginInputState>>({})

    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setInput(prev => ({...prev, [name]: value}))
    }
    const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = userLoginSchema.safeParse(input)
        if(!result.success){
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors(fieldErrors as Partial<LoginInputState>);
            return
        }
        console.log(input)

    }
  return (
    <div className="flex items-center justify-center min-h-screen w-screen ">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">UberEats</h1>
        </div>
        <div className="mb-4">
          <div className="relative ">
            {/* <Label htmlFor="">Email</Label> */}
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
                    <p className="text-red-500 text-xs">{errors.email[0] }</p>
                )
            }
          </div>
        </div>
        <div className="mb-4">
          <div className="relative ">
            {/* <Label htmlFor="">Password</Label> */}
            <Input
              type="Password"
              name="password"
              onChange={changeEventHandler}
              value={input.password}
              placeholder="Password"
              className="pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors.password && (
                    <p className="text-red-500 text-xs">{errors.password[0] }</p>
                )
            }
          </div>
        </div> 
        <div className="mb-10">
            {
                loading ? (
                    <Button disabled className="bg-orange hover:bg-orangeHover w-full"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>
                ):(
                    <Button type="submit"  className="bg-orange hover:bg-orangeHover w-full" >Login</Button>
                )
            }
        <div className="mt-4 text-center">
        <Link to="/forgot-password" className="hover:text-blue-500 hover:underline">Forgot Password</Link>
        </div>
        </div>
        
        <Separator />
        <p className="mt-2 text-center">Don't have an account? {""} <Link to="/signup" className="text-blue-500" >SignUp</Link></p>

        
      </form>
    </div>
  ); 
};

export default Login;
