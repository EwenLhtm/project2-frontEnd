import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Settings,
  LogOut,
  ChevronsUpDown,
} from "lucide-react";
import { logout } from "../../features/auth/authService";

type UserMenuProps = {
  name: string;
  email: string;
};

export default function UserMenu({ name, email }: UserMenuProps) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const initial = name.charAt(0).toLowerCase();

  function handleSettingsClick() {
    setIsOpen(false);
    // Redirect to settings page
    navigate("/settings/profile");
  }

  async function handleLogoutClick() {
    setIsOpen(false);

    // Clear token from the backend API service (if applicable)
    await logout();

    // Clear user data from localStorage
    localStorage.removeItem("token");


    // Redirect to login page
    navigate("/login");
  }

  return (
    <div className="relative w-full">
      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-full overflow-hidden rounded-lg border border-[#555] bg-[#3f3f3f] shadow-xl">
          {/* Informations utilisateur */}
          <div className="flex items-center gap-3 border-b border-[#555] px-3 py-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#555] text-sm">
              {initial}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {name}
              </p>
              <p className="truncate text-xs text-gray-200">
                {email}
              </p>
            </div>
          </div>

          {/* Settings */}
          <button
            type="button"
            onClick={() => handleSettingsClick()}
            className="flex w-full items-center gap-3 border-b border-[#555] px-3 py-3 text-left text-sm hover:bg-[#4a4a4a]"
          >
            <Settings size={17} className="text-gray-300" />
            <span>Settings</span>
          </button>

          {/* Log out */}
          <button
            type="button"
            onClick={() => handleLogoutClick()}
            className="flex w-full items-center gap-3 px-3 py-3 text-left text-sm hover:bg-[#4a4a4a]"
          >
            <LogOut size={17} className="text-gray-300" />
            <span>Log Out</span>
          </button>
        </div>
      )}

      {/* Bouton profil : ouvre ou ferme le menu */}
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex w-full items-center gap-2 rounded-lg px-0.5 py-1 text-left transition hover:bg-[#292929]"
      >
        <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[#555] bg-[#404040] text-xs">
          {initial}
        </div>

        <span className="flex-1 truncate text-xs font-medium">
          {name}
        </span>

        <ChevronsUpDown
          size={14}
          className="shrink-0 text-gray-400"
        />
      </button>
    </div>
  );
}