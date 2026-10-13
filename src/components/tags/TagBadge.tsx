
type TagBadgeProps = {
  label: string;
  color?: "gray" | "blue" | "green" | "purple" | "red";
};

const colors = {
  gray: "bg-gray-700 text-gray-200",
  blue: "bg-blue-950 text-blue-200",
  green: "bg-green-950 text-green-200",
  purple: "bg-purple-950 text-purple-200",
  red: "bg-red-950 text-red-200",
};

export default function TagBadge({
  label,
  color = "gray",
}: TagBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${colors[color]}`}
    >
      {label}
    </span>
  );
}
