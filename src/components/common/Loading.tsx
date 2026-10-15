import { Sparkles } from "lucide-react";

type LoadingScreenProps = {
  message?: string;
};

export default function LoadingScreen({
  message = "Préparation de votre espace...",
}: LoadingScreenProps) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#171717] px-6 text-white">
      {/* Lumière d'ambiance */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[100px]" />

      <div className="relative flex w-full max-w-sm flex-col items-center text-center">
        {/* Logo */}
        <div className="relative mb-8 flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl">
          <span className="text-2xl font-bold tracking-tight">R</span>

          <div className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full border border-[#171717] bg-violet-500">
            <Sparkles size={13} />
          </div>
        </div>

        {/* Spinner */}
        <div className="relative mb-7 flex size-12 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />

          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-400" />

          <div className="size-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
        </div>

        <h1 className="text-lg font-semibold tracking-tight">
          Un instant...
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          {message}
        </p>

        {/* Barre décorative */}
        <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-violet-400" />
        </div>

        <p className="mt-5 text-xs text-gray-600">
          Renote · Votre espace de travail
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}