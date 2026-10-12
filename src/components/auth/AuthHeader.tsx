
export default function AuthHeader({
  logo = "R",
  title,
  description,
}: {
  logo?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="w-full text-center">
      <div className="mb-3 text-[22px] font-medium">
        {logo}
      </div>

      <h1 className="text-xl font-semibold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-xs text-gray-400">
          {description}
        </p>
      )}
    </header>
  );
}
