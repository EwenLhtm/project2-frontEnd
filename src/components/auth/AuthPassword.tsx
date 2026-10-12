
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AuthPassword({
  id = "password",
  label = "Password",
  placeholder = "Password",
  autoComplete = "current-password",
  required = true,
  value,
  onChange,
}: {
  id?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          value={value}
          onChange={onChange}
          className="h-9 w-full rounded-md border border-[#3a3a3a] bg-[#292929] px-2.5 pr-10 text-xs outline-none transition placeholder:text-gray-400 focus:border-white/60 focus:ring-1 focus:ring-white/20"
        />

        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-white"
        >
          {visible ? <EyeOff size={14} /> : <Eye size={14} />}
        </button>
      </div>
    </div>
  );
}
