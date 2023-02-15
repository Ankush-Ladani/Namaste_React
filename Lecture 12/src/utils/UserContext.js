import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Anuj Shah",
    email: "anuj@gmail.com",
  },
});

export default UserContext;
