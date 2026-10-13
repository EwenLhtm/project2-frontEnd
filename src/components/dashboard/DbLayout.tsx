export default function DbLayout({children, ClassName = ""} : {children: React.ReactNode; ClassName?: string}) {
    return (
     <main className="min-h-screen bg-zinc-800 px-5 text-white">
        <div className={`mx-auto flex min-h-screen w-full max-w-[342px] flex-col items-center pt-[clamp(100px,15.5vh,260px)] ${ClassName}`}>
            {children}
        </div>
     </main>
    )
}