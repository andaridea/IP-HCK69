export default function NavbarLogin() {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="./globe.png"
                alt="Airbnb Logo"
                className="h-12"
              />
              <span className="ml-2 text-lg font-extrabold text-purple-600 font-sans">Staycation!</span>
            </div>
            <div className="flex items-center space-x-6">
            <span className="text-purple-600 text-lg font-semibold font-serif">Hello, Name!</span>
            </div>
          </div>
        </div>  
      </nav>
    </>
  )
} 