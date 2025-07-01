import { useEffect, useState } from "react"

const ThemeSelector = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') return true;
        if (saved === 'light') return false;
        return prefersDark;
    })
    
    useEffect(() => {
        const root = window.document.documentElement;
        if(theme) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light');
        }
    }, [theme])

    return (
        <div className='flex flex-row justify-around dark:bg-slate-800 bg-white w-full rounded-2xl shadow'>
            <img src="/assets/images/logo.svg" alt="logo" className='text-white m-4' />
            <button 
                className='p-2 m-4 rounded-xl hover:bg-slate-700 dark:bg-slate-600 bg-[#c7d0dc] transition-all ease-in-out duration-150'
                onClick={() => setTheme(!theme)}>
                    {
                        theme
                        ?
                            <img src="/assets/images/icon-sun.svg" alt="light theme" className='text-black' width={30}/>
                        :
                            <img src="/assets/images/icon-moon.svg" alt="light theme" className='text-black' width={30}/>
                    }
            </button>
        </div>
    )
}

export default ThemeSelector