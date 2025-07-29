import { apiClient } from '../../../shared/api';

export const userApi = {
  getUser: async (userId) => {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  },

  updateUser: async (userId, userData) => {
    const response = await apiClient.put(`/users/${userId}`, userData);
    return response.data;
  }
};