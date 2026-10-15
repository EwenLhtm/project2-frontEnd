import {
  Home,
  FolderGit2,
  BookOpen,
  ChevronsUpDown,
} from "lucide-react";
import UserMenu from "./UserMenu";
import type { User } from "../../features/auth/auth.types";

type SidebarProps = {
  user: User;
};

export default function Sidebar({
  user,
}: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[228px] flex-col border-r border-[#303030] bg-[#171717] px-3 py-3 text-white">
      {/* Logo */}
      <div className="mb-5 flex items-center gap-2.5 px-0.5">
        <div className="flex size-7 items-center justify-center rounded-md bg-white text-xs font-semibold text-black">
          R
        </div>

        <span className="text-sm font-semibold">Renote</span>
      </div>

      {/* Navigation principale */}
      <nav className="flex flex-col gap-1">
        <p className="mb-1 px-0.5 text-[11px] text-gray-400">
          Platform
        </p>

        <a
          href="/dashboard"
          className="flex h-7 items-center gap-2.5 rounded-lg bg-[#292929] px-3 text-xs font-medium transition hover:bg-[#333333]"
        >
          <Home size={14} />
          <span>Dashboard</span>
        </a>
      </nav>

      {/* Liens en bas */}
      <div className="mt-auto flex flex-col gap-1 pb-5">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex h-7 items-center gap-2.5 rounded-lg px-2.5 text-xs text-gray-300 transition hover:bg-[#292929] hover:text-white"
        >
          <FolderGit2 size={14} />
          <span>Repository</span>
        </a>

        <a
          href="/docs"
          className="flex h-7 items-center gap-2.5 rounded-lg px-2.5 text-xs text-gray-300 transition hover:bg-[#292929] hover:text-white"
        >
          <BookOpen size={14} />
          <span>Documentation</span>
        </a>
      </div>

      {/* Profil utilisateur */}
      <div className="mt-1">
        <UserMenu name={user.name} email={user.email} />
      </div>
    </aside>
  );
}