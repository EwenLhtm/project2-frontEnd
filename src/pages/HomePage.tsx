// import Button from "../components/common/button";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
    const navigate = useNavigate();
    
    return (
        <div className="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] flex p-6 lg:p-8 items-center lg:justify-center min-h-screen flex-col">
            <header className="w-full lg:max-w-4xl max-w-[335px] text-sm mb-6 not-has-[nav]:hidden">
                    <nav className="flex items-center justify-end gap-4">
                        {/* <Button onClick={() => {navigate("/login")}}>Login</Button>
                        <Button onClick={() => {navigate("/register")}}>Sign Up</Button> */}
                    </nav>
            </header>
            <div className="flex items-center justify-center w-full transition-opacity opacity-100 duration-750 lg:grow starting:opacity-0">
                <main className="flex max-w-[335px] w-full flex-col-reverse lg:max-w-4xl lg:flex-row">
                    <div className="text-[13px] leading-[20px] flex-1 p-6 pb-12 lg:p-20 bg-white dark:bg-[#161615] dark:text-[#EDEDEC] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d] rounded-es-lg rounded-ee-lg lg:rounded-ss-lg lg:rounded-ee-none">
                        <h1 className="mb-1 font-medium">Renote</h1>
                        <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">Renote is the best application to take notes.<br />Create, save, delete your notes. <br/>Add tags to your notes.</p>
                    </div>
                    <div className="bg-[#fff2f2] dark:bg-[#1D0002] relative lg:-ms-px -mb-px lg:mb-0 rounded-t-lg lg:rounded-t-none lg:rounded-e-lg! aspect-[335/376] lg:aspect-auto w-full lg:w-[438px] shrink-0 overflow-hidden">

                        <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                            <linearGradient id="layerGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#FFD700" />
                                <stop offset="100%" stopColor="#FF69B4" />
                            </linearGradient>
                            </defs>
                            <path d="M78 258V58H158C208 58 238 88 238 128C238 158 218 183 188 193L243 258H198L153 203H118V258H78Z 
                                    M118 88V173H158C183 173 198 158 198 128C198 98 183 88 158 88H118Z"
                                fill="black" opacity="0.5" transform="translate(8,8)"/>
                            <path d="M70 250V50H150C200 50 230 80 230 120C230 150 210 175 180 185L235 250H190L145 195H110V250H70Z 
                                    M110 80V165H150C175 165 190 150 190 120C190 90 175 80 150 80H110Z"
                                fill="url(#layerGradient)" stroke="#1B1B18" strokeWidth="4"/>
                        </svg>

                        <div className="absolute inset-0 rounded-t-lg lg:rounded-t-none lg:rounded-e-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"></div>
                    </div>
                </main>
            </div>
        </div>
    );
}