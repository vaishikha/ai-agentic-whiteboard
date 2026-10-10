import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

function AppHeader() {
    return (
      <div className="w-full border-b p-4 flex items-center justify-between">
        <SidebarTrigger />
      </div>
    )
}
export default AppHeader