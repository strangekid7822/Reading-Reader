import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUser({ name: savedName });
    }
    setLoading(false);
  }, []);

  const login = (name) => {
    localStorage.setItem('userName', name);
    setUser({ name });
  };

  const logout = () => {
    localStorage.removeItem('userName');
    setUser(null);
  };

  const value = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}