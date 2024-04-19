import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function CartPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id")
    const hotelName = queryParams.get("hotelName")
    const checkIn = queryParams.get("checkIn");
    const checkOut = queryParams.get("checkOut");
    let totalPrice = queryParams.get("totalPrice");

    totalPrice = totalPrice && !isNaN(totalPrice) ? Number(totalPrice) : null;

    const handlePay = async () => {
        if (totalPrice === null) {
            console.error("Invalid totalPrice:", totalPrice);
            return;
        }
        try {
            // await sendPaymentDataToServer();

            window.snap.embed('0a75aea8-3060-4049-a8fc-35d5e3dfdde6', {
                embedId: 'snap-container',
                onSuccess: function (result) {
                  /* You may add your own implementation here */
                  alert("payment success!"); console.log(result);
                }
              });
        } catch (error) {
            console.log(error)
        }
    };

    // const sendPaymentDataToServer = async () => {
    //     try {
    //         const response = await localRequest({
    //             url: "/generate-midtrans-token",
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //             },
    //             data: {
    //                 id: id,
    //                 hotelName: hotelName,
    //                 checkIn: checkIn,
    //                 checkOut: checkOut,
    //                 totalPrice: totalPrice,
    //             }
    //         });
    //         const data = await response.json();
    //         window.location.href = data.paymentUrl;
    //     } catch (error) {
    //         console.error("Error sending payment data to server:", error);
    //     }
    // };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8 flex-grow">
                <h1 className="text-3xl font-bold text-black-600 mb-4">Orders Detail</h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
                    <div className="p-6">
                        <p className="text-gray-700 mb-2">Hotel Name: {hotelName}</p>
                        <p className="text-gray-700 mb-2">Check-in: {checkIn}</p>
                        <p className="text-gray-700 mb-2">Check-out: {checkOut}</p>
                        <p className="text-gray-700 mb-2">Total Price: {totalPrice}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md"
                    onClick={handlePay}
                    >
                        Confirm and Pay
                    </button>
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
                            <a href="#" className="text-gray-400 hover:text-white">
                                About
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                Contact
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
