import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ className, label, ...props }: InputProps) {
  return (
    <div className="inline-flex flex-col gap-2">
      {label && <label className="text-xs font-semibold">{label}</label>}
      <input
        {...props}
        className="rounded-md border border-gray-300 px-2 py-1.5 text-base transition-all duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  );
}
