
export default function AuthFooter({
  text,
  linkText,
  href,
}: {
  text: string;
  linkText: string;
  href: string;
}) {
  return (
    <p className="mt-6 text-center text-xs text-gray-400">
      {text}{" "}
      <a
        href={href}
        className="ml-1 font-semibold text-white underline underline-offset-4"
      >
        {linkText}
      </a>
    </p>
  );
}
