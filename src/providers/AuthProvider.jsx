//

import { useState } from "react";
import { AuthContext } from "../context";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
