import {z} from "zod";

export const userSignupSchema = z.object({
    fullName:z.string().min(1,"Full name is required"),
    email:z.string().email("Invalid email address").min(1,"Email is required"),
    password:z.string().min(6,"Password must be at least 6 characters"),
    contactNumber :z.string().min(10,"Contact number must be  10 digits"),

})
export type SignupInputState = z.infer<typeof userSignupSchema>

export const userLoginSchema = z.object({

    email:z.string().email("Invalid email address").min(1,"Email is required"),
    password:z.string().min(6,"Password must be at least 6 characters"),


})
export type LoginInputState = z.infer<typeof userLoginSchema>