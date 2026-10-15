import { useState } from "react";
import { Check } from "lucide-react";

const themes = [
  { id: "light", label: "Light", description: "Light background" },
  { id: "dark", label: "Dark", description: "Dark background" },
  { id: "system", label: "System", description: "Follow your device" },
];

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <h2 className="text-sm font-semibold">Appearance</h2>
      <p className="mt-2 text-sm text-gray-400">
        Customize how Renote looks on your device
      </p>

      <div className="mt-6 space-y-3">
        {themes.map((item) => {
          const selected = theme === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTheme(item.id)}
              className={`flex w-full items-center justify-between rounded-lg border p-4 text-left transition ${
                selected
                  ? "border-gray-400 bg-[#333333]"
                  : "border-[#454545] bg-[#2b2b2b] hover:bg-[#303030]"
              }`}
            >
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="mt-1 text-xs text-gray-400">
                  {item.description}
                </p>
              </div>

              {selected && <Check size={17} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}