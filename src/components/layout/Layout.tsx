import Sidebar from './Sidebar'
import RightNavigation from './RightNavigation'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-apollo-dark min-h-screen text-white">
      <Sidebar />
      <RightNavigation />
      <main className="ml-[395px] px-20 max-w-[1400px]">
        {children}
      </main>
    </div>
  )
}
