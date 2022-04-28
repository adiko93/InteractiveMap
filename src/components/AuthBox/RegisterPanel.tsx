import { useMutation } from "@apollo/client";
import {
  Button,
  Classes,
  FormGroup,
  H5,
  InputGroup,
  Intent,
  Label,
  PanelProps,
  Position,
  Toaster,
} from "@blueprintjs/core";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { creteAccountGQL } from "../../../graphql/client/mutations";
import { AppToaster } from "../Toaster";
import { AuthPanelProps } from "./AuthBoxOverlay";

const RegisterPanel = (props: PanelProps<AuthPanelProps>) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [loginWrong, setLoginWrong] = useState(false);
  const [createAccount, { data, error, loading }] = useMutation(
    creteAccountGQL,
    {
      variables: {
        username: login,
        password,
      },
      onError: (error) => {
        AppToaster!.show({
          intent: Intent.DANGER,
          message: error.message,
        });
      },
      onCompleted: () => {
        AppToaster!.show({
          intent: Intent.SUCCESS,
          message: "Udało się! Możesz sie teraz zalogować",
        });
        props.setTitle("Zaloguj się");
        props.closePanel();
      },
    }
  );

  const handleRegister = () => {
    if (password !== confirmPassword) {
      AppToaster!.show({
        intent: Intent.DANGER,
        message: "Hasła nie są takie same",
      });
      setPasswordWrong(true);
      return;
    }
    if (password.length < 6) {
      AppToaster!.show({
        intent: Intent.DANGER,
        message: "Hasło zbyt krótkie",
      });
      setPasswordWrong(true);
      return;
    }

    if (!/^[A-Za-z0-9]+$/.test(login)) {
      AppToaster!.show({
        intent: Intent.DANGER,
        message: "Znaki specjalne są niedozwolone",
      });
      setLoginWrong(true);
      return;
    }

    createAccount();
  };

  return (
    <FormGroup>
      <Label>
        Login:
        <InputGroup
          placeholder="Login"
          leftIcon="user"
          style={{ marginBottom: "10px" }}
          onChange={(t) => {
            setLoginWrong(false);
            setLogin(t.target.value);
          }}
          value={login}
          intent={loginWrong ? Intent.DANGER : undefined}
        />
      </Label>
      <Label>
        Hasło:
        <InputGroup
          placeholder="Hasło"
          leftIcon="lock"
          type="password"
          style={{ marginBottom: "10px" }}
          onChange={(t) => {
            setPasswordWrong(false);
            setPassword(t.target.value);
          }}
          value={password}
          intent={passwordWrong ? Intent.DANGER : undefined}
        />
      </Label>
      <Label>
        Powtórz hasło:
        <InputGroup
          placeholder="Powtórz hasło"
          leftIcon="lock"
          type="password"
          style={{ marginBottom: "15px" }}
          onChange={(t) => {
            setPasswordWrong(false);
            setConfirmPassword(t.target.value);
          }}
          value={confirmPassword}
          intent={passwordWrong ? Intent.DANGER : undefined}
        />
      </Label>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          intent={Intent.NONE}
          onClick={() => {
            props.setTitle("Zaloguj się");
            props.closePanel();
          }}
          text="Zaloguj się"
        />
        <Button
          intent={Intent.PRIMARY}
          loading={loading}
          text="Zarejestruj się"
          onClick={() => handleRegister()}
        />
      </div>
    </FormGroup>
  );
};

export default RegisterPanel;
