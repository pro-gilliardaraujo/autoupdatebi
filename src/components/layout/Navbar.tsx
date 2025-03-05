'use client'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Nova Plataforma</span>
          </div>
          <div className="flex items-center">
            {/* Add user menu, notifications, etc. here */}
          </div>
        </div>
      </div>
    </nav>
  )
} 