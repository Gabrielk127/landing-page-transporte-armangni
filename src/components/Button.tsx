import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  className?: string; // Nova prop para customizar estilos
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#01a5ac] text-white font-bold rounded-md p-2 border border-cyan-100 hover:border-cyan-300
      lg:text-base
      xl:w-[600px] xl:py-6
      ${className}`} // Permite passar estilos personalizados
    >
      {label}
    </button>
  );
};

export default Button;
