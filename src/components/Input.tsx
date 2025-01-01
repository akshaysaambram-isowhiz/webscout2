import { X } from "lucide-react";

type InputProps = {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export default function Input({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onClear,
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-base text-gray-700 transition duration-200 hover:border-gray-300 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="size-4 text-gray-500" />
        </button>
      )}
    </div>
  );
}
