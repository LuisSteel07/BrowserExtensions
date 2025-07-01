interface SearchInputProps {
    setValue: Function
}

const SearchInput:React.FC<SearchInputProps> = ({setValue}:SearchInputProps) => {
    return (
        <section className="bg-slate-700">
            <input type="text" name="search" id="search" />
            <button>
                Buscar
            </button>
        </section>        
    )
}