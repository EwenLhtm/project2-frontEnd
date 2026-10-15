import { NavLink, Outlet } from "react-router-dom";
import { UserRound, LockKeyhole, Palette } from "lucide-react";
import DbSidebar from "../../components/dashboard/DbSideBar";
import { useSelector } from "react-redux";
import ErrorLogin from "../../components/common/ErrorLogin";

const tabs = [
  { label: "Profile", path: "profile", icon: UserRound },
  { label: "Password", path: "password", icon: LockKeyhole },
  { label: "Appearance", path: "appearance", icon: Palette },
];

export default function SettingsLayout() {
  const { user } = useSelector((state: any) => state.auth);

  if (user == null) {
    return (
      <ErrorLogin />
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#242424] text-white">
      <DbSidebar user={user} />

      <main className="ml-[228px] min-h-screen px-8 py-7">
        <header className="border-b border-[#3b3b3b] pb-5">
          <h1 className="text-xl font-semibold">Settings</h1>
          <p className="mt-2 text-sm text-gray-400">
            Manage your profile and account settings
          </p>
        </header>

        <div className="grid grid-cols-[180px_minmax(0,1fr)] gap-10 pt-6">
          <nav className="space-y-1">
            {tabs.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-[#383838] text-white"
                      : "text-gray-300 hover:bg-[#303030]"
                  }`
                }
              >
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="min-w-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}