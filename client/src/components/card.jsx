import { Link } from "react-router-dom"

export default function Card({ el }) {
    return (
        <>
            {/* Card Grid */}
            <div className="flex flex-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Card */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={el.image} alt="Entire homes" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <Link className="text-lg font-semibold mb-2" to={`/hotel/${el.id}`}>{el.name}</Link>
                        <p className="text-gray-700 mt-2 mb-4">{el.description}</p>
                        <span className="text-base font-semibold mb-2 mt-10">{el.address}</span>
                    </div>
                </div>
            </div>
        </>
    )
}