import {
  Button,
  Divider,
  FormGroup,
  H3,
  InputGroup,
  Intent,
  Label,
  Panel,
  PanelProps,
} from "@blueprintjs/core";
import { useState } from "react";
import RegisterPanel from "./RegisterPanel";
import { signIn } from "next-auth/react";
import { AuthPanelProps } from "./AuthBoxOverlay";

const LoginPanel = (props: PanelProps<AuthPanelProps>) => {
  const openNewPanel = () => {
    props.openPanel({
      props: {
        setTitle: props.setTitle,
      },
      renderPanel: RegisterPanel,
      title: `Zarejestruj sie`,
    });
  };
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <>
      <FormGroup>
        <Label>
          Login:
          <InputGroup
            placeholder="Login"
            leftIcon="user"
            style={{ marginBottom: "10px" }}
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
          />
        </Label>
        <Label>
          Hasło:
          <InputGroup
            placeholder="Hasło"
            leftIcon="lock"
            type="password"
            style={{ marginBottom: "15px" }}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
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
              props.setTitle("Zarejestruj się");
              openNewPanel();
            }}
            text="Zarejestruj się"
          />
          <Button
            intent={Intent.PRIMARY}
            onClick={() =>
              signIn("credentials", {
                username: loginValue,
                password: passwordValue,
                callbackUrl: `${window.location.origin}`,
              })
            }
            text="Zaloguj"
          />
        </div>
      </FormGroup>
      <Button
        intent={Intent.PRIMARY}
        text="Zaloguj sie poprzez Google'a"
        style={{ marginBottom: "10px" }}
      />
      <Button
        intent={Intent.PRIMARY}
        onClick={() => signIn("twitch")}
        text="Zaloguj sie poprzez Twitch'a"
        style={{ marginBottom: "10px" }}
      />
      <Button intent={Intent.PRIMARY} text="Zaloguj sie poprzez Facebook'a" />
    </>
  );
};

export default LoginPanel;
