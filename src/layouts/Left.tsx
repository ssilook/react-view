import React from 'react'
import { Calendar, Home, Inbox, MoreHorizontal, Search, Settings,
    ChevronRight, ChevronDown
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
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu1 from '@/pages/Menu1'


interface Menu {
    title: string;
    url?: string;
    icon: React.ReactSVGElement
    subMenu?: subMenu[]
}

interface subMenu {
    title: string;
    url: string;
    icon: React.ReactSVGElement
}

// Menu items.
const items = [
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

const itemAndSubitem = [
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        icon: Settings,
        subItems: [
            {
                title: "Sub1",
                url: "#",
                icon: Settings,
            },
            {
                title: "Sub2",
                url: "#",
                icon: Settings,
            }
        ]
    },
]

function Left() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader>
                Sidebar Header
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                        <SidebarMenuBadge>24</SidebarMenuBadge>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Custom</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem key={'Custom Menu'}>
                                <SidebarMenuButton asChild>
                                    <a href={'#'}>
                                        <Settings />
                                        <span>Custom Menu</span>
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
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Sub</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <Collapsible
                                className="group/collapsible"
                                open={isOpen}
                                onOpenChange={setIsOpen}
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton asChild>
                                            <a href={'#'}>
                                                <Settings />
                                                <span>Sub Menu</span>
                                                <SidebarMenuBadge>
                                                    {isOpen ? 
                                                        <ChevronDown size='sm' /> : <ChevronRight size='sm' />
                                                    }
                                                </SidebarMenuBadge>
                                            </a>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <a href={'#'}>
                                                        <Settings />
                                                        <span>Sub1</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <a href={'#'}>
                                                        <Settings />
                                                        <span>Sub2</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* <SidebarGroup>
                    <SidebarGroupLabel>Sub</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemAndSubitem.map(menu => (
                                !menu.subItems ? 
                                <SidebarMenuItem key={menu.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={menu.url}>
                                            <menu.icon />
                                            <span>{menu.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    <SidebarMenuBadge>24</SidebarMenuBadge>
                                </SidebarMenuItem>
                                :
                                <Collapsible
                                    className="group/collapsible"
                                    open={isOpen}
                                    onOpenChange={setIsOpen}
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <a href={'#'}>
                                                    <menu.icon />
                                                    <span>{menu.title}</span>
                                                    <SidebarMenuBadge>
                                                        {isOpen ? 
                                                            <ChevronDown size='sm' /> : <ChevronRight size='sm' />
                                                        }
                                                    </SidebarMenuBadge>
                                                </a>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {menu.subItems.maps(subMenu => (
                                                    <SidebarMenuSubItem>
                                                        <SidebarMenuButton asChild>
                                                            <a href={subMenu.url}>
                                                                <subMenu.icon />
                                                                <span>{subMenu.title}</span>
                                                            </a>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup> */}
            </SidebarContent>
            <SidebarFooter>
                    Sidebar Footer
            </SidebarFooter>
            <SidebarSeparator />
        </Sidebar>
    )
}

export default Left