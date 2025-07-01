import { useState } from "react"
import type { ExtensionProps } from "../interfaces/ExtensionProps"

const Extension:React.FC<ExtensionProps> = ({name, description, isActive, logo}:ExtensionProps) => {
    const [Active, setIsActive] = useState(isActive)

    return (
        <article className="flex flex-col border-[1px] border-slate-600 bg-white text-black dark:bg-slate-800 dark:text-white rounded-2xl md:w-[450px] w-full shadow-lg dark:shadow-slate-800">
            <section className="flex flex-row items-start w-full gap-4 m-4">
                <img src={logo} alt="Icon extension" width={80} />
                <div className="flex flex-col gap-2 p-2">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-md">{description}</p>
                </div>
            </section>
            <section className="flex justify-between items-center m-4">
                <button 
                    className="border-[1px] w-[120px] hover:border-black hover:bg-[#f25c54] hover:text-black dark:bg-slate-700 bg-[#EBF2FC] border-white dark:text-white text-black shadow-2xl transition duration-150 ease-in-out rounded-full font-semibold p-2">
                        Remove
                </button>
                <button
                    role="switch"
                    aria-checked={Active}
                    aria-label={name ?? 'Interruptor'}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                        Active ? 'bg-[#f25c54]' : 'bg-slate-700'
                    }`}
                    onClick={() => setIsActive(!Active)}
                    >
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        Active ? 'translate-x-6' : 'translate-x-1'
                        }`}
                    />
                </button>
            </section>
        </article>
    )
}

export default Extension