import { useEffect, useState } from 'react'
import data from './data.json'
import type { ExtensionProps } from './interfaces/ExtensionProps'
import Extension from './components/Extension'
import type { Mode } from './interfaces/Mode'
import ModeSelector from './components/ModeSelector'


const App = () => {
    
    const [mode, setMode] = useState<Mode>('all')
    const [ExtensionGlobal, setExtencionGlobal]= useState<Array<ExtensionProps>>(JSON.parse(JSON.stringify(data, null, 4)))
    const [extensions, setExtensions] = useState<Array<ExtensionProps>>(ExtensionGlobal)

    const [allMode, setAllMode] = useState(true);
    const [activeMode, setActiveMode] = useState(false);
    const [inactiveMode, setInactiveMode] = useState(false);

    const handle_selection_mode = (mode:Mode) => {
        if(mode === 'all'){
            setAllMode(true)
            setActiveMode(false)
            setInactiveMode(false)
        } else if (mode === 'active'){
            setAllMode(false)
            setActiveMode(true)
            setInactiveMode(false)
        } else if (mode === 'inactive'){
            setAllMode(false)
            setActiveMode(false)
            setInactiveMode(true)
        }
    }

    const handle_remove = (name: string) => {
        const new_list: Array<ExtensionProps> = []

        extensions.map(e => {if(e.name !== name) new_list.push(e)})

        setExtencionGlobal(new_list)
        setExtensions(new_list)
    }

    const handle_active = (name: string) => {
        extensions.map(e => {if(e.name === name) e.isActive = !e.isActive})
    }

    useEffect(() => {
        let filter_extensions: Array<ExtensionProps> = [] 

        if(mode === 'all') {
            filter_extensions = ExtensionGlobal
        } else if (mode === 'active') {
            ExtensionGlobal.map(e => {
                if(e.isActive) filter_extensions.push(e)
            }) 
        } else if (mode === 'inactive') {
            ExtensionGlobal.map(e => {
                if(!e.isActive) filter_extensions.push(e)
            })
        }

        handle_selection_mode(mode)
        setExtensions(filter_extensions)
    }, [mode])

    return (
        <section className="flex flex-wrap grow gap-4 justify-center items-start w-full">
            <div className='flex md:flex-row flex-col md:items-baseline items-center gap-4 justify-around w-full'>
                <h1 className='md:text-4xl text-2xl font-bold dark:text-white text-black'>Extensions List</h1>
                <div className='flex gap-4 text-white'>
                    <ModeSelector text='All' mode={'all'} isSelected={allMode} setMode={setMode}/>
                    <ModeSelector text='Active' mode={'active'} isSelected={activeMode} setMode={setMode}/>
                    <ModeSelector text='Inactive' mode={'inactive'} isSelected={inactiveMode} setMode={setMode}/>
                </div>
            </div>

            <section className='flex flex-wrap justify-center lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
                    {
                        extensions.map((e) => {
                            return (
                                <Extension
                                    name={e.name}
                                    description={e.description}
                                    logo={e.logo}
                                    isActive={e.isActive}
                                    handle_delete={handle_remove}
                                    handle_active={handle_active}
                                    key={e.name}
                                />
                            )
                        })
                    }
            </section>        
        </section>
    )

}
export default App