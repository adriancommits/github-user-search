import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { DISPLAY_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  // connect the reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // our actions for alert are:
  const displayAlert = (msg, type) => {
    setTimeout(() => removeAlert(), 5000);

    dispatch({ type: DISPLAY_ALERT, payload: { msg, type } });
  };

  // REMOVE ALERT
  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider value={{ displayAlert, alert: state }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
