import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { localRequest } from "./utils/axios";

export default function DetailPage() {
    const [dataHotels, setDataHotels] = useState([])
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)
    let { id } = useParams()
    const fetchData = async () => {
        try {
            const { data } = await localRequest({
                url: "/pub/hotels/" + id,
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

    useEffect(() => {
        if (checkIn && checkOut) {
            const startDate = new Date(checkIn);
            const endDate = new Date(checkOut);
            const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
            const pricePerNight = dataHotels.price;
            const total = days * pricePerNight;
            setTotalPrice(total);
        } else {
            setTotalPrice(0);
        }
    }, [checkIn, checkOut, dataHotels.price]);

    const handleCheckInChange = (e) => {
        setCheckIn(e.target.value);
    };

    const handleCheckOutChange = (e) => {
        setCheckOut(e.target.value);
    };

    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Image*/}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <img
                        src={dataHotels.image}
                        alt="Property Image"
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Check-in and Check-out */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8 max-w-2xl">
                    <div className="p-6">
                    <h1 className="text-base font-semibold text-black-600 mb-4"><span className="text-3xl font-bold">{dataHotels.price}</span> / night</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                                <input
                                    type="date"
                                    id="checkin"
                                    className="border border-gray-300 rounded-full py-3 px-4 w-full max-w-lg"
                                    onChange={handleCheckInChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                                <input
                                    type="date"
                                    id="checkout"
                                    className="border border-gray-300 rounded-full py-3 px-4 w-full max-w-lg"
                                    onChange={handleCheckOutChange}
                                />
                            </div>
                            <span className="text-gray-600 text-lg">Total Price: {totalPrice}</span>
                            <div className="flex justify-between items-center col-span-2">
                                <Link to="/order/:id" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md w-full flex justify-center">
                                    Reserve
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hotel Information */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
                    <div className="p-6">
                        <h1 className="text-3xl font-semibold mb-4">{dataHotels.name}</h1>
                        <p className="text-gray-700 mb-4">
                           {dataHotels.description}
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