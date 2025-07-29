import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  [key: string]: any;
}

export const Input: React.FC<InputProps> = ({ type = 'text', placeholder, value, onChange, required = false, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input"
      {...props}
    />
  );
};