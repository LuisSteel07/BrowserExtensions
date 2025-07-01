import type { Mode } from "../interfaces/Mode"

interface ModeSelector {
    text: string,
    mode: Mode,
    isSelected: boolean,
    setMode: Function
}

const ModeSelector:React.FC<ModeSelector> = ({text, mode, isSelected, setMode}: ModeSelector) => {
    return (
        <button onClick={() => setMode(mode)} className={
            isSelected 
                ?
                "border-[1px] md:w-[120px] w-[90px] hover:border-black bg-[#f25c54] text-black border-white transition duration-150 ease-in-out rounded-full font-semibold p-2 shadow-2xl"
                :
                "border-[1px] md:w-[120px] w-[90px] hover:border-black hover:bg-[#f25c54] dark:text-white text-black dark:bg-slate-700 bg-white border-white transition duration-150 ease-in-out rounded-full font-semibold p-2 shadow-2xl"
        }>
            {text}
        </button>
    )
}

export default ModeSelector