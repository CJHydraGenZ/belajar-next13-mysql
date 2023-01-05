// import { registerAdd } from "../func/context";

import { registerAdd } from "../func/fetcher";

export const RegisterReducer = async (state, action) => {
  switch (action.type) {
    case "register": {
      const response = await registerAdd({
        email: action.email,
        password: action.password,
        role: action.role,
      });
      return {
        ...state,
        response,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
