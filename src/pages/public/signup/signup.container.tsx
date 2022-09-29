import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import _get from "lodash/get";

import styles from "./signup.module.scss";

import {Button, TextInput} from "@components";
import {AppLogo} from "@components/common";

import {SignUpSchema, useYupValidationResolver} from "@utils/yup";

const initialState = {
   hidePassword: true,
   hideConfirmPassword: true,
   loginSuccess: false,
   errors: {},
   submitting: false,
};

const SignUp = (): JSX.Element => {
   const resolver = useYupValidationResolver(SignUpSchema);
   const {
      register,
      formState: {errors},
      setError,
      handleSubmit,
   } = useForm({resolver});

   const [fieldStatus, setStatus] = useState<typeof initialState>(initialState);

   const handleLogin = handleSubmit(async value => {
      setStatus(prevState => ({...prevState, submitting: true}));
      // const {username: email, password} = value;
      // const {success, data, errors} = await signIn({email, password});
      setStatus(prevState => ({...prevState, submitting: false}));
      // if (success && data) {
      //    dispatch(appActions.saveUserData({data}));
      //    return;
      // }
      // if (_get(errors, "password", "")) setError("password", {type: "server", message: _get(errors, "password", "")});
      // if (_get(errors, "email", "")) setError("username", {type: "server", message: _get(errors, "email", "")});
   });

   const toggleVisiblePassword = () => setStatus(prev => ({...prev, hidePassword: !prev.hidePassword}));
   const toggleVisibleConfirmPassword = () => setStatus(prev => ({...prev, hideConfirmPassword: !prev.hideConfirmPassword}));

   if (fieldStatus.loginSuccess) {
      return <Navigate to="/" />;
   }

   return (
      <div className={styles["root"]}>
         <div className={styles["form-wrapper"]}>
            <div className={styles["form"]}>
               <p>START FOR FREE</p>
               <AppLogo />
               <p>
                  Already A Member?{" "}
                  <a className={styles["link"]} href="/login">
                     Login
                  </a>
               </p>
               <div className={styles["name-wrapper"]}>
                  <TextInput
                     placeholder="First Name"
                     endIcon="address-card"
                     error={_get(errors, "first_name", "")}
                     {...register("first_name")}
                  />
                  <TextInput
                     placeholder="Last Name"
                     endIcon="address-card"
                     error={_get(errors, "last_name", "")}
                     {...register("last_name")}
                  />
               </div>
               <TextInput placeholder="Username" endIcon="user" error={_get(errors, "username", "")} {...register("username")} />
               <TextInput
                  type={fieldStatus.hidePassword ? "password" : "text"}
                  placeholder="Password"
                  endIcon={fieldStatus.hidePassword ? "eye" : "eye-slash"}
                  onClickIcon={toggleVisiblePassword}
                  error={_get(errors, "password", "")}
                  {...register("password")}
               />
               <TextInput
                  type={fieldStatus.hideConfirmPassword ? "password" : "text"}
                  placeholder="Confirm Password"
                  endIcon={fieldStatus.hideConfirmPassword ? "eye" : "eye-slash"}
                  onClickIcon={toggleVisibleConfirmPassword}
                  error={_get(errors, "confirm_password", "")}
                  {...register("confirm_password")}
               />
               <Button loading={fieldStatus.submitting} onClick={handleLogin}>
                  Create Account
               </Button>
               {/* <>
                  {fieldStatus.errors.map((error, index) => (
                     <p key={index.toString()}>{error}</p>
                  ))}
               </> */}
            </div>
         </div>
         <div className={styles["content-wrapper"]}>
            <h1>
               Welcome to <span>Planner Buddy!</span>
            </h1>
         </div>
      </div>
   );
};

export default SignUp;
