import React from 'react'

const PageContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">{children}</div>
)
export default PageContainer
