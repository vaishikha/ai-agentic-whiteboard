"use client"
import Image from "next/image"
import { Archive, LayoutGrid, Settings, Sparkle, Sparkles, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { useUser } from "@clerk/nextjs"

export function AppSidebar() {

  const path=usePathname()
  const {user}= useUser();
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={46} height={40} />
          <h2 className="text-lg font-semibold text-gray-800">Whizboard</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <button>+ Create New Board</button>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>My Boards</SidebarGroupLabel>
          <SidebarMenuButton className="p-5" isActive={path==='/dashboard'}>
            <LayoutGrid />
            <span>All Files</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="p-5 mt-2" isActive={path==='/shared-files'}>
            <Users/>
            <span>Shared</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="p-5 mt-2" isActive={path==='/archived'}>
            <Archive />
            <span>Archived</span>
          </SidebarMenuButton>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Others</SidebarGroupLabel>

          <SidebarMenuButton className="p-5 mt-2" isActive={path==='/ai'}>
            <Sparkles />
            <span>AI Helper</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="p-5 mt-2" isActive={path==='/settings'}>
            <Settings />
            <span>Settings</span>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <button>+ Create New Board</button>
        <div className="p-4 my-3 border rounded-md">
          <h2 className="text-sm flex justify-between mb-1">2 files created <span>total 3</span></h2>
          <Progress value={66} className="h-2 mt-2" />
        </div>

        <div className="flex items-center gap-2 p-4 border rounded-md">
         {user?.imageUrl ? (
           <Image
             src={user.imageUrl}
             alt="User Avatar"
             width={40}
             height={40}
             className="size-10 rounded-full object-cover"
           />
         ) : (
           <div
             aria-label="User Avatar"
             className="flex size-10 items-center justify-center rounded-full bg-muted text-sm font-medium"
           >
             {user?.firstName?.charAt(0) ?? ""}
             {user?.lastName?.charAt(0) ?? ""}
           </div>
         )}
          <h2>{user?.firstName} {user?.lastName}</h2>
        </div>
        
      </SidebarFooter>
    </Sidebar> 
  )
}