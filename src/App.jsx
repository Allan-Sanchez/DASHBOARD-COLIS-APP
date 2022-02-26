import React, { useEffect, useReducer } from "react";
import AppRouter from "./routers/AppRouter";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import firebase, { FirebaseContext } from "./firebase";
import InfoState from "./context/InfoState";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <AuthContext.Provider value={{ user, dispatch }}>
        <InfoState>
          <AppRouter />
        </InfoState>
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
}

export default App;
