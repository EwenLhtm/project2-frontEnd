
export default function AuthInput({
  id,
  label,
  type = "text",
  placeholder = "",
  autoComplete,
  required = true,
  value,
  onChange,
  name,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold"
      >
        {label}
      </label>

      <input
        id={id}
        name={name ?? id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={onChange}
        className="h-9 w-full rounded-md border border-[#3a3a3a] bg-[#292929] px-2.5 text-xs outline-none transition placeholder:text-gray-400 focus:border-white/60 focus:ring-1 focus:ring-white/20"
      />
    </div>
  );
}
