import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-overline">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3
            bg-dark-300 border border-dark-50
            text-white placeholder:text-neutral-500
            focus:outline-none focus:border-gold/50
            transition-colors duration-200
            ${error ? "border-burgundy" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-burgundy">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
