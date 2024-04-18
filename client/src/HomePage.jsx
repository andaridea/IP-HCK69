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
                {/* Hero Section */}
                <div className="bg-gradient-to-b from-gray-100 to-white px-8 py-16">
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
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Explore nearby</h2>
                    <div className="flex flex-wrap -mx-4">
                        {dataHotels && dataHotels.map(el => {
                            return <Card key={el.id} el={el} />
                        })}
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
            </div>
        </>
    )
}