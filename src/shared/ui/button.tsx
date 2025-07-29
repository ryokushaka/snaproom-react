import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({ children, to, onClick, type = 'button', disabled = false, ...props }) => {
  const buttonProps = {
    type,
    disabled,
    onClick,
    ...props
  };

  if (to) {
    return (
      <Link to={to} className="button">
        {children}
      </Link>
    );
  }

  return (
    <button {...buttonProps} className="button">
      {children}
    </button>
  );
};