import { useNavigate } from "react-router-dom"
export default function NavbarLogin() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login')
  }
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="./globe.png"
                alt="Logo"
                className="h-12"
              />
              <span className="ml-2 text-lg font-extrabold text-purple-600 font-sans">Staycation!</span>
            </div>
            <div className="flex items-center space-x-6">
            <span className="text-purple-600 text-lg font-semibold font-serif">Hello, Name!</span>
            <button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={handleLogout}
            >
                Log Out
            </button>
            </div>
          </div>
        </div>  
      </nav>
    </>
  )
} 