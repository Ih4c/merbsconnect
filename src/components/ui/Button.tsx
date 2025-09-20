import React from "react";
import "../../styles/Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
  onClick?: () => void;
}

function Button({ children, variant = "primary", onClick }: ButtonProps) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
