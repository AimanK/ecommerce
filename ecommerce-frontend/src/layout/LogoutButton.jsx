import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-outline-light" onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000" } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;