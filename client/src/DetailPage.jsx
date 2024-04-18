import Navbar from "./components/navbar";

export default function DetailPage() {
    return (
        <>
        <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Image*/}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <img
                        src="https://via.placeholder.com/800x600"
                        alt="Property Image"
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Check-in and Check-out */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8 max-w-2xl">
                    <div className="p-6">
                    <h1 className="text-base font-semibold text-black-600 mb-4"><span className="text-3xl font-bold">$ 80</span> / night</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                                <input
                                    type="date"
                                    id="checkin"
                                    className="border border-gray-300 rounded-full py-3 px-4 w-full max-w-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                                <input
                                    type="date"
                                    id="checkout"
                                    className="border border-gray-300 rounded-full py-3 px-4 w-full max-w-lg"
                                />
                            </div>
                            <div className="flex justify-between items-center col-span-2">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md w-full">
                                    Reserve
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hotel Information */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
                    <div className="p-6">
                        <h1 className="text-3xl font-semibold mb-4">Private room in house</h1>
                        <p className="text-gray-700 mb-4">Hosted by John Doe</p>
                        <div className="flex items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-purple-600 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                {/* Description */}
                            </svg>
                            <span className="text-gray-600">1 guest · 1 bedroom · 1 bed · 1 shared bath</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nisl non odio mattis suscipit.
                        </p>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-semibold">Staycation</h3>
                                <p className="text-gray-400">Discover the world with us.</p>
                            </div>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">About</a>
                                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                                <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}