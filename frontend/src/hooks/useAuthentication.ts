import { useMutation } from "@apollo/client";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { authMutation } from "~/graphql/mutations";
import { AuthToken, LoginForm, RegisterForm } from "~/models";
import useImageUploader from "./useImageUploader";

export default function useAuthentication() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { uploader, deleteFile } = useImageUploader();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [login] = useMutation<{ login: AuthToken }>(authMutation.LOGIN);
  const [register] = useMutation<{ createUser: AuthToken }>(authMutation.REGISTER);

  const handleLogin = (value: LoginForm) => {
    setLoading(true);
    login({
      variables: {
        ...value,
      },
      onCompleted: ({ login: res }) => {
        localStorage.setItem("access_token", res.token);
        setLoading(false);
        navigate(state?.prevUrl || "/");
      },
      onError: (err) => {
        setErrors(err.message);
        setLoading(false);
      },
    });
  };

  const handleRegister = (value: RegisterForm) => {
    setLoading(true);
    console.log(value);
    const basedata = {
      email: value.email,
      password: value.password,
      fullName: value.fullName,
      address: value.address,
      gender: value.gender,
      bod: moment(value.bod).format("YYYY-MM-DD"),
      phoneNumber: value.phoneNumber,
    };
    if (value.avatar) {
      uploader(`avatars/${value.email}`, value.avatar, (url) => {
        register({
          variables: {
            form: {
              ...basedata,
              avatar: url,
            },
          },
          onCompleted: ({ createUser: res }) => {
            localStorage.setItem("access_token", res.token);
            setLoading(false);
            navigate("/");
          },
          onError: (err) => {
            deleteFile(`avatars/${value.email}`, () => {
              setErrors(err.message);
              setLoading(false);
            });
          },
        });
      });
    } else {
      register({
        variables: {
          form: {
            ...basedata,
          },
        },
        onCompleted: ({ createUser: res }) => {
          localStorage.setItem("access_token", res.token);
          setLoading(false);
          navigate("/");
        },
        onError: (err) => {
          setErrors(err.message);
          setLoading(false);
        },
      });
    }
  };

  return { loading, errors, handleLogin, handleRegister };
}
