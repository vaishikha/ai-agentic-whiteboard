"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'

function ProjectList() {
    const [projectList, setProjectList] = useState([]); // Replace with your actual project list data
    return (
        <div>
            {projectList.length === 0 ? (
                <div className="flex flex-col items-center p-10 border rounded-xl mt-10 gap-3">
                    <Image src="/folder.png" alt="Folder" width={90} height={90} />
                    <h2 className="text-2xl font-bold">No Boards Found</h2>
                    <p className="text-muted-foreground">Create your first board to get brainstorming!</p>
                    <Button>+ Create New Board</Button>
                </div>
            ) : (
                <div>
                    {/* Project List */}
                </div>
            )}
        </div>
    )
}

export default ProjectList