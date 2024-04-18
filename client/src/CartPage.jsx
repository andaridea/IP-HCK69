import Card from "./components/card"
export default function CartPage () {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-black-600 mb-4">Confirm and Pay</h1>
            <Card />
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