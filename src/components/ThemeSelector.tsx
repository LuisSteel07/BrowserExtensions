import { useEffect, useState } from "react"

const ThemeSelector = () => {
    const [theme, setTheme] = useState("dark")

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    
    useEffect(() => {
        if(theme === "dark") {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }
        console.log(theme)
    }, [theme])

    return (
        <div className='flex flex-row justify-around dark:bg-slate-800 bg-white w-full rounded-2xl shadow'>
            <img src="/assets/images/logo.svg" alt="logo" className='text-white m-4' />
            <button 
                className='p-2 m-4 rounded-xl hover:bg-slate-700 dark:bg-slate-600 bg-[#c7d0dc] transition-all ease-in-out duration-150'
                onClick={() => handleChangeTheme()}>
                    {
                        theme === "dark"
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