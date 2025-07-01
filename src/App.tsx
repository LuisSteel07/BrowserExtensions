import { useEffect, useState } from 'react'
import data from './data.json'
import type { ExtensionProps } from './interfaces/ExtensionProps'
import Extension from './components/Extension'
import { Mode } from './interfaces/Mode'
import ModeSelector from './components/ModeSelector'

const App = () => {
    const ExtensionsList: Array<ExtensionProps> = JSON.parse(JSON.stringify(data, null, 4))

    const [mode, setMode] = useState<Mode>(Mode.ALL)
    const [extensions, setExtensions] = useState<Array<ExtensionProps>>(ExtensionsList)

    useEffect(() => {
        let filter_extensions: Array<ExtensionProps> = [] 

        if(mode == Mode.ALL) {
            filter_extensions = ExtensionsList
        } else if (mode == Mode.ACTIVE) {
            ExtensionsList.map(e => {
                if(e.isActive) filter_extensions.push(e)
            }) 
        } else if (mode == Mode.INACTIVE) {
            ExtensionsList.map(e => {
                if(!e.isActive) filter_extensions.push(e)
            })
        }

        setExtensions(filter_extensions)
    }, [mode])

    return (
        <section className="flex flex-wrap grow gap-4 justify-center items-start w-full">
            <div className='flex md:flex-row flex-col md:items-baseline items-center gap-4 justify-around w-full'>
                <h1 className='md:text-4xl text-2xl font-bold dark:text-white text-black'>Extensions List</h1>
                <div className='flex gap-4 text-white'>
                    <ModeSelector text='All' mode={Mode.ALL} setMode={setMode}/>
                    <ModeSelector text='Active' mode={Mode.ACTIVE} setMode={setMode}/>
                    <ModeSelector text='Inactive' mode={Mode.INACTIVE} setMode={setMode}/>
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