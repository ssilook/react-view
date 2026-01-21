/* import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '../../public/vite.svg'
import { Button } from '@/components/ui/button' */
import { Outlet } from 'react-router-dom'

function Container() {
    // const [count, setCount] = useState(0)
    return (
        <>
            <div className='p-4'>
                <Outlet />
            </div>
            {/* <div className="m-4 text-center space-y-10">
                <div className='flex justify-center left-255'>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                <Button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                </div>
                <p className="read-the-docs">
                Click on the Vite and React logos to learn more
                </p>
            </div> */}
        </>
    )
}

export default Container