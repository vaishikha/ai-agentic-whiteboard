import AppHeader from '@/components/custom/dashboard/AppHeader'
import { AppSidebar } from '@/components/custom/dashboard/AppSideBar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex-1 flex flex-col">
                <AppHeader/>
                <div className="p-5">
                  {children}
                </div>
            </div>
        </SidebarProvider> 
    )
}

export default DashboardLayout