/* import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
  } from "@/components/ui/navigation-menu" */
  import { SidebarTrigger } from "@/components/ui/sidebar"
  
import { ModeToggle } from "@/components/mode-toggle"

function Header() {
  return (
    <>
      <div className="flex w-full px-4 py-2 border-b space-x-4">
        <SidebarTrigger />
        {/* <SidebarTrigger>
            {children}
        </SidebarTrigger> */}
        {/* <NavigationMenu>
          <NavigationMenuList>
              <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
        <ModeToggle />
      </div>
    </>
  )
}

export default Header