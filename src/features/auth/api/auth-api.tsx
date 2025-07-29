import { apiClient } from '../../../shared/api';
import { User } from '../../../entities/user/ui/user-card';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
  }
};