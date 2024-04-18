import { useEffect, useState } from "react";
import Card from "./components/card";
import { localRequest } from "./utils/axios";

export default function HomePage() {
    const [dataHotels, setDataHotels] = useState()
    const fetchData = async () => {
        try {
            const { data } = await localRequest({
                url: "/",
                method: "GET"
            })
            setDataHotels(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div>
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

                {/* Hero Section */}
                <div className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold text-gray-900 mb-4 font-serif">
                                Discover the world with <span className="text-purple-600 font-serif">Staycation</span>
                            </h1>
                            <p className="text-lg text-gray-700 font-serif">From cozy country homes to funky city apartments, find your perfect stay.</p>
                            <div className="mt-8">
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="border border-gray-300 rounded-full py-3 px-4 w-full max-w-lg"
                                />
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-md ml-2">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Explore nearby</h2>
                {dataHotels && dataHotels.map(el => {
                    return <Card key={el.id} el={el} />
                })}
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
            </div>
        </>
    )
}