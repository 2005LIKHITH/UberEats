import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom";
const ForgotPassword = () => {
    const loading:boolean = false
    const [_, setEmail] = useState<string>("");
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
            <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
            <p className="text-sm text-gray-600">  Enter your email address to reset your password</p>
        </div>
        <div className="relative">
            <Input type="email" placeholder="Enter your email"  onChange={(e) => setEmail(e.target.value)} className="pl-10"/>
            <Mail className="absolute inset-y-2 left-2 text-gray-400 pointer-events-none" />
        </div>
        {
            loading ? (
                <Button disabled  type="submit"
                className="bg-orange hover:bg-orangeHover w-full"><Loader2 className="animate-spin mr-2 h-4 w-4" />Please wait</Button>
            ):(
                <Button type="submit"
                className="bg-orange hover:bg-orangeHover w-full">Send Reset Link</Button>
            )
        }
        <div className="text-center">
            Back to {" "}
            <Link to ="/login" className="text-blue-500 ">Login</Link>
        </div>

      </form>
    </div>
  )
}

export default ForgotPassword
