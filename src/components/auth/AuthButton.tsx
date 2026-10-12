
import type { ReactNode, ButtonHTMLAttributes } from "react";

type AuthButtonProps = {
  children?: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

export default function AuthButton({
  children = "Continue",
  type = "submit",
  disabled = false,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="h-9 w-full rounded-md bg-white text-xs font-medium text-black transition hover:bg-gray-200 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}
