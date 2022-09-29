import {useState} from "react";
import {useForm} from "react-hook-form";
import _get from "lodash/get";

import {useAuth} from "@utils/auth.utils";
import {SignInSchema, useYupValidationResolver} from "@utils/yup";

import {useAppDispatch} from "@my-store/hooks";
import {appActions} from "@my-store/app";

import {signIn} from "@services/auth.service";

const initialState = {
   hidePassword: true,
   submitting: false,
   errors: {},
};

const useLoginHook = () => {
   const auth = useAuth();
   const resolver = useYupValidationResolver(SignInSchema);
   const {
      register,
      formState: {errors},
      setError,
      handleSubmit,
   } = useForm({resolver});

   const [fieldStatus, setStatus] = useState<typeof initialState>(initialState);

   const dispatch = useAppDispatch();

   const handleLogin = handleSubmit(async value => {
      setStatus(prevState => ({...prevState, submitting: true}));
      const {username: email, password} = value;
      const {success, data, errors} = await signIn({email, password});
      setStatus(prevState => ({...prevState, submitting: false}));
      if (success && data) {
         dispatch(appActions.saveUserData({data}));
         return;
      }
      if (_get(errors, "password", "")) setError("password", {type: "server", message: _get(errors, "password", "")});
      if (_get(errors, "email", "")) setError("username", {type: "server", message: _get(errors, "email", "")});
   });

   const toggleVisiblePassword = () => setStatus(prevState => ({...prevState, hidePassword: !prevState.hidePassword}));

   return {
      auth,
      errors,
      register,
      fieldStatus,
      handleLogin,
      toggleVisiblePassword,
   };
};

export default useLoginHook;
