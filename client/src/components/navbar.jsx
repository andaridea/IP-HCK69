export default function Navbar () {
    return (
        <>
        {/* Navbar */}
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
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md">
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}