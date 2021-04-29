import { Routerapp } from "./routes/Routerapp";
import { AuthContext } from "./auth/AuthContext.jsx";
import React, { useReducer, useEffect } from "react";
import authReducer from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('idUserLoged')) || { logged: false };
}

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem('idUserLoged', JSON.stringify(user));
  }, [user])
  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <Routerapp />
    </AuthContext.Provider>
  );
}

export default App;
