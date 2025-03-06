import React from 'react'

const PageContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">{children}</div>
)
export default PageContainer