import { useNavigate } from "react-router-dom";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";

type ErrorScreenProps = {
  message?: string;
  onRetry?: () => void;
};

export default function ErrorScreen({
  message = "Impossible de charger vos données pour le moment.",
  onRetry,
}: ErrorScreenProps) {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#171717] px-6 text-white">
      {/* Lumière d'ambiance */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.06] blur-[100px]" />

      <div className="relative w-full max-w-md rounded-2xl border border-white/[0.08] bg-[#202020] p-7 shadow-2xl sm:p-9">
        {/* Icône */}
        <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10 text-red-400">
          <AlertTriangle size={23} />
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
          Une erreur est survenue
        </p>

        <h1 className="text-2xl font-semibold tracking-tight">
          Impossible de continuer
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {message}
        </p>

        <div className="mt-5 rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
          <p className="text-sm leading-5 text-gray-300">
            Votre session a peut-être expiré. Retournez à la connexion
            pour vous authentifier à nouveau et réessayer.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => navigate("/login", { replace: true })}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <ArrowLeft size={16} />
            Retour à la connexion
          </button>

          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/[0.05] hover:text-white"
            >
              <RefreshCw size={15} />
              Réessayer
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-gray-600">
          Renote · Votre espace de travail
        </p>
      </div>
    </div>
  );
}