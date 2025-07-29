import { useState, useEffect } from 'react';
import { authApi } from '../api/auth-api';
import { User } from '../../../entities/user/ui/user-card';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<User>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuth = (): AuthState => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Validate token and get user data
      authApi.getCurrentUser().then(setUser).catch(() => {
        localStorage.removeItem('authToken');
      });
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<User> => {
    setLoading(true);
    try {
      const { user, token } = await authApi.login(credentials);
      localStorage.setItem('authToken', token);
      setUser(user);
      return user;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };
};