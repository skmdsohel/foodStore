import {createContext} from "react";

const userContext = createContext({
  user: {
    name: "John",
    email: "john@example.com",
  },
});

export default userContext;