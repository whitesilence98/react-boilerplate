import * as yup from "yup";

const usernameLength = "Username must be at least 3 characters";
const passwordNotLongEnough = "Password must be at least 8 characters";
const invalidEmail = "Email must be a valid email";
const requiredUsername = "Username is required";
const requiredEmail = "Email is required";
const requiredPass = "Password is required";
const requiredAcc = "Account is required";

export const SignInSchema = yup.object().shape({
   username: yup.string().min(3, usernameLength).max(255).required(requiredUsername),
   password: yup.string().min(3, passwordNotLongEnough).max(255).required(requiredPass),
});

export const SignUpSchema = yup.object().shape({
   username: yup.string().min(3, usernameLength).max(255).required(requiredUsername),
   password: yup.string().min(3, passwordNotLongEnough).max(255).required(requiredPass),
   confirm_password: yup.string().min(3, passwordNotLongEnough).max(255).required(requiredPass),
   first_name: yup.string().min(3, passwordNotLongEnough).max(255).required(requiredPass),
   last_name: yup.string().min(3, passwordNotLongEnough).max(255).required(requiredPass),
});
