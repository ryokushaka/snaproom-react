import React, { useState } from 'react';
import { useAuth } from '../model/use-auth';
import { Button, Input } from '../../../shared/ui';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};