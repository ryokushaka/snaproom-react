const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

interface ApiResponse<T = any> {
  data: T;
}

export const apiClient = {
  get: async <T = any>(url: string): Promise<ApiResponse<T>> => {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return { data: await response.json() };
  },

  post: async <T = any>(url: string, data: any): Promise<ApiResponse<T>> => {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return { data: await response.json() };
  },

  put: async <T = any>(url: string, data: any): Promise<ApiResponse<T>> => {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return { data: await response.json() };
  }
};