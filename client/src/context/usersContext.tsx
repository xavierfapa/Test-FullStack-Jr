import { createContext, useState, useContext, ReactNode } from "react";
import { User } from "@/types/user";

export const UsersContext = createContext({});

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
