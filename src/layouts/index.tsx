import React from 'react'
import Header from './Header'
import Left from './Left'
import Container from './Container'
import { SidebarProvider } from "@/components/ui/sidebar"
function layouts(/* {children} : {children: React.ReactNode} */) {
    return (
        <>
            <SidebarProvider>
                <Left></Left>
                <main className="w-full">
                    <Header>
                        {/* {children} */}
                    </Header>
                    <Container></Container>
                </main>
            </SidebarProvider>

        </>
    )
}

export default layouts