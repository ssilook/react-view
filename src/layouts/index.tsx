import React from 'react'
import Header from './Header'
import Left from './Left'
import Container from './Container'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"

function layouts({children} : {children: React.ReactNode}) {
    return (
        <>
            <Header></Header>
            <ModeToggle></ModeToggle>
            <SidebarProvider>
                <Left></Left>
                <main>
                    <SidebarTrigger>
                        {children}
                    </SidebarTrigger>
                    <Container></Container>
                </main>
            </SidebarProvider>

        </>
    )
}

export default layouts