import { ThemeProvider } from "@/components/theme-provider"
import Router from './routes'
import '@/styles/App.css'
/* import { Reset } from 'styled-reset' */
// import Layouts from './layouts'

function App() {

  return (
    <>
      {/* <Reset></Reset> */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App
