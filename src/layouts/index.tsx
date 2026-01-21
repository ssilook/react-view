import Header from './Header'
import Left from './Left'
import Container from './Container'
import { SidebarProvider } from "@/components/ui/sidebar"
function layouts() {
    return (
        <>
            <SidebarProvider>
                <Left />
                <main className="flex-1 min-h-screen overflow-auto">
                    <Header />
                    <Container />
                </main>
            </SidebarProvider>

        </>
    )
}

export default layouts