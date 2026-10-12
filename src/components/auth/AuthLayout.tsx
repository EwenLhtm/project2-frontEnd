

export default function AuthLayout({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#171717] px-5 text-white">
      <div
        className={`mx-auto flex min-h-screen w-full max-w-[342px] flex-col items-center pt-[clamp(100px,15.5vh,260px)] ${className}`}
      >
        {children}
      </div>
    </main>
  );
}
