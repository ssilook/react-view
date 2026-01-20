import React from 'react'
import { Calendar, Home, Inbox, MoreHorizontal, Search, Settings,
    ChevronRight, ChevronDown, CornerDownRight, File, Wrench, Star, Space
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarFooter,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

/* import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu1 from '@/pages/Menu1' */


interface Menu {
    title: string;
    url?: string;
    icon: React.ElementType;
    subMenu?: subMenu[]
}

interface subMenu {
    title: string;
    url: string;
    icon: React.ElementType;
    badge?: number;
}

// Menu items.
const application: Menu[] = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
]

const custom: Menu[] = [
    {
        title: "Custom Menu",
        url: "#",
        icon: Wrench,
    }
]

const sub: Menu[] = [
    {
        title: "Sub Menu",
        url: "#",
        icon: CornerDownRight,
        subMenu: [
            {
                title: "Sub1",
                url: "#",
                icon: File,
                badge: 3
            },
            {
                title: "Sub2",
                url: "#",
                icon: File,
                badge: 11
            }
        ]
    }
]

function Left() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { open } = useSidebar()
    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader className='text-center'>
                {open
                    ? <>
                        <span className='flex justify-center items-center space-x-4 m-4'>
                            <Star size={30} />
                            <span>
                                Header
                            </span>
                        </span>
                      </>
                    : <span className='flex justify-center items-center mt-1'><Star size={30}/> </span>}
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {application.map((item) => (
                        <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Custom</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {custom.map((item) => (
                            <SidebarMenu key={item.title}>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <SidebarMenuAction asChild>
                                                <MoreHorizontal className='cursor-pointer' />
                                            </SidebarMenuAction>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent side="right" align="start">
                                            <DropdownMenuItem>
                                                <span>Edit Project</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Delete Project</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        ))}
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Sub</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sub.map((menu) => (
                                <Collapsible
                                    className="group/collapsible"
                                    open={isOpen}
                                    onOpenChange={setIsOpen}
                                    key={menu.title}
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <a href={'#'}>
                                                    <menu.icon />
                                                    <span>{menu.title}</span>
                                                    <SidebarMenuBadge>
                                                        {isOpen ? 
                                                            <ChevronDown size="16px" /> : <ChevronRight size="16px" />
                                                        }
                                                    </SidebarMenuBadge>
                                                </a>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {menu.subMenu!.map((subMenu) => (
                                                    <SidebarMenuSubItem key={subMenu.title}>
                                                        <SidebarMenuButton asChild>
                                                            <a href={subMenu.url}>
                                                                <subMenu.icon />
                                                                <span>{subMenu.title}</span>
                                                            </a>
                                                        </SidebarMenuButton>
                                                        <SidebarMenuBadge>{subMenu.badge}</SidebarMenuBadge>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className='text-center'>
                {open
                    ? <>
                        <span className='flex justify-center items-center'>
                            <span>
                                Footer
                            </span>
                        </span>
                      </>
                    : <span className='flex justify-center items-center mb-1'><Space size={16}/> </span>}
            </SidebarFooter>
            <SidebarSeparator />
        </Sidebar>
    )
}

export default Left