export default function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
        <button 
            className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
            onClick={onClick}
        >
            {children}
        </button>
    );
}