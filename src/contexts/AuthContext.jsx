import { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext(null);

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Hash password using Web Crypto API
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing session on mount
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
    setLoading(false);
  }, []);

  // Register new user
  const register = async (username, email, password) => {
    try {
      setError(null);
      
      // Validate inputs
      if (!username || !email || !password) {
        throw new Error('所有字段都是必填的');
      }
      
      if (password.length < 6) {
        throw new Error('密码至少需要6个字符');
      }
      
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (users[email]) {
        throw new Error('该邮箱已被注册');
      }
      
      // Hash password
      const hashedPassword = await hashPassword(password);
      
      // Create new user
      const newUser = {
        username,
        email,
        hashedPassword,
        createdAt: new Date().toISOString()
      };
      
      // Save to localStorage
      users[email] = newUser;
      localStorage.setItem('users', JSON.stringify(users));
      
      // Auto login after registration
      const userSession = { username, email };
      localStorage.setItem('currentUser', JSON.stringify(userSession));
      setUser(userSession);
      
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Login user
  const login = async (email, password) => {
    try {
      setError(null);
      
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      const user = users[email];
      
      if (!user) {
        throw new Error('用户不存在');
      }
      
      // Hash the provided password and compare
      const hashedPassword = await hashPassword(password);
      if (user.hashedPassword !== hashedPassword) {
        throw new Error('密码错误');
      }
      
      // Create session
      const userSession = { 
        username: user.username, 
        email: user.email 
      };
      localStorage.setItem('currentUser', JSON.stringify(userSession));
      setUser(userSession);
      
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}