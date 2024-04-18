export default function Card() {
    return (
        <>
            {/* Card Grid */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Explore nearby</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Card */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/300" alt="Entire homes" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <a className="text-lg font-semibold mb-2" href="/hotel/:id">Entire homes</a>
                            <p className="text-gray-700 mt-2">Comfortable private places, with room for friends or family.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}