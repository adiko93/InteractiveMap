import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Tooltip2 } from "@blueprintjs/popover2";
import { Button, H5, Icon, Intent } from "@blueprintjs/core";
import { useOverlayContext } from "../../context/OverlayContext";

const AuthSection: React.FC = () => {
  const { data: session } = useSession();
  const { overlayDispatch } = useOverlayContext();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        alignItems: "center",
        alignContent: "center",
        flexShrink: 0,
      }}
    >
      {session ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {session?.user?.image ? <img></img> : <Icon icon="user" />}
            <H5 style={{ margin: "0 10px 0 10px" }}>{session?.user?.name}</H5>
            <Tooltip2 content="Ustawienia konta">
              <Icon
                color="gray"
                icon="cog"
                style={{
                  cursor: "pointer",
                }}
              />
            </Tooltip2>
          </div>
          <Button intent={Intent.PRIMARY} onClick={() => signOut()}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <span>
            Aby uzyskać dostęp do wszystkich funkcji musisz się zalogować
          </span>

          <Button
            intent={Intent.PRIMARY}
            onClick={() => overlayDispatch({ type: "openAuthOverlay" })}
            style={{ width: "100px" }}
          >
            Login
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthSection;
