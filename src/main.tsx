import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import './css/styles.css'
import App from './App'
import ThemeSelector from './components/ThemeSelector'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='flex flex-col gap-8 min-h-screen items-center p-4 bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540] dark:text-white text-black'>
        <ThemeSelector />
        <App />
    </main>
  </StrictMode>,
)
