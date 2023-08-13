import { useState } from "react";

const useNewUser = () => {
  const userTemplate = {
    displayName: "",
    firstName: "",
    lastName: "",
    bio: ""
  };
  const [newUser, setNewUser] = useState(userTemplate);

  return [newUser, setNewUser];
};

export default useNewUser;
