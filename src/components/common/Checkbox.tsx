
export default function Checkbox({
  id,
  label,
  checked,
  onChange,
  name,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  name?: string;
}) {
  return (
    <label
      htmlFor={id}
      className="flex w-fit cursor-pointer items-center gap-1.5 text-xs"
    >
      <input
        id={id}
        name={name ?? id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 cursor-pointer accent-white"
      />

      <span>{label}</span>
    </label>
  );
}
