import axios from "axios";

import Button from "../../components/UI/Button/Button";
import TextField from "../../components/UI/TextField/TextField";
import Alert from "../../components/UI/Alert/Alert";

import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { authenficationSlice } from "../../reducers/authentication";
import Loading from "../../components/UI/Loading/Loading";

import s from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("mor_2314");
  const [password, setPassword] = useState<string>("83r5^_");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [errorAuthAlertStatus, setAuthErrorAlertStatus] =
    useState<boolean>(false);
  const [errorEmptyInputAlertStatus, setErrorEmptyInputAlertStatus] =
    useState<boolean>(false);

  const authenficate = async (username: string, password: string) => {
    if (username && password) {
      setIsLoading(true);

      await axios
        .post("https://fakestoreapi.com/auth/login", {
          username,
          password,
        })
        .then((data) => {
          const token = data.data.token;

          dispatch(authenficationSlice.actions.auth(token));

          setIsLoading(false);
          navigate("/");
        })
        .catch(() => {
          setIsLoading(false);

          setAuthErrorAlertStatus(true);
          setTimeout(() => {
            setAuthErrorAlertStatus(false);
          }, 2500);
        });
    } else {
      setErrorEmptyInputAlertStatus(true);

      setTimeout(() => {
        setErrorEmptyInputAlertStatus(false);
      }, 2500);
    }
  };

  return (
    <div className={s.wrapper}>
      {errorAuthAlertStatus ? (
        <Alert type="Error">Incorrect username or password!</Alert>
      ) : (
        <></>
      )}
      {errorEmptyInputAlertStatus ? (
        <Alert type="Error">Empty input!</Alert>
      ) : (
        <></>
      )}

      {isLoading ? <Loading /> : <></>}

      <div className={s.title}>Login</div>
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        value={username}
        placeholder="Username"
        style={{ textAlign: "center", marginBottom: "25px" }}
      />
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        placeholder="Password"
        type="password"
        value={password}
        style={{ textAlign: "center", marginBottom: "35px" }}
      />
      <Button onClick={() => authenficate(username, password)}>Login</Button>
    </div>
  );
};

export default Login;
