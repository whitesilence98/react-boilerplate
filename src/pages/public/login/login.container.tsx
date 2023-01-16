import React from "react";
import {Navigate} from "react-router-dom";
import _get from "lodash/get";

import styles from "./login.module.scss";

import {Button, Divider, TextInput} from "@components";
import {AppLogo} from "@components/common";

import useLoginHook from "./login.hook";

const GoogleIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
      <defs>
         <path
            id="a"
            d="M44.5 20H24v8.5h11.8C34.7 3save3.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
      </defs>
      <clipPath id="b">
         <use overflow="visible" xlinkHref="#a"></use>
      </clipPath>
      <path fill="#FBBC05" d="M0 37V11l17 13z" clipPath="url(#b)"></path>
      <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" clipPath="url(#b)"></path>
      <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" clipPath="url(#b)"></path>
      <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" clipPath="url(#b)"></path>
   </svg>
);

const Login = (): JSX.Element => {
   const {auth, errors, register, fieldStatus, handleLogin, toggleVisiblePassword} = useLoginHook();

   if (auth) return <Navigate to="/" />;

   return (
      <div className={styles["root"]}>
         <div className={styles["form-wrapper"]}>
            <div className={styles["form"]}>
               <AppLogo />
               <p>Enter your credentials to access your account.</p>
               <Button variant="outlined">
                  <GoogleIcon />
                  Login with Google
               </Button>
               <Divider content="or" />
               <TextInput placeholder="Username" endIcon="user" error={_get(errors, "username", "")} {...register("username")} />
               <TextInput
                  placeholder="Password"
                  type={fieldStatus.hidePassword ? "password" : "text"}
                  endIcon={fieldStatus.hidePassword ? "eye" : "eye-slash"}
                  onClickIcon={toggleVisiblePassword}
                  error={_get(errors, "password", "")}
                  {...register("password")}
               />
               <Button onClick={handleLogin} loading={fieldStatus.submitting}>
                  Login
               </Button>
               <p>
                  Not a member?{" "}
                  <a className={styles["link"]} href="/sign-up">
                     Sign Up
                  </a>
               </p>
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

export default Login;
