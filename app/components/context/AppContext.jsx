import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { RegisterContext, RegisterDispatch } from "../func/context";
import { initRegister } from "./init";
import { RegisterReducer } from "./Reduser";

export function AppWrapper({ children }) {
  // const [appState, setAppState] = useState({
  //   email: "",
  //   password: "",
  //   role: "",
  // });

  // const contextValue = useMemo(() => {
  //   return [appState, setAppState];
  // }, [appState, setAppState]);
  const [register, dispatch] = useReducer(RegisterReducer, initRegister);
  // const contextValue = useMemo(() => {
  //   return { register, dispatch };
  // }, [register, dispatch]);
  return (
    <RegisterContext.Provider value={register}>
      <RegisterDispatch.Provider value={dispatch}>
        {children}
      </RegisterDispatch.Provider>
    </RegisterContext.Provider>
  );
}

export function useRegisterContext() {
  return useContext(RegisterContext);
}
export function useRegisterDispatch() {
  return useContext(RegisterDispatch);
}
