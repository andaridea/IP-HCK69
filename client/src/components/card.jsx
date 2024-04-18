import { Link } from "react-router-dom"

export default function Card({ el }) {
    return (
        <>
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={el.image} alt="Entire homes" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <Link className="text-lg font-semibold mb-2" to={`/hotel/${el.id}`}>
                            {el.name}
                        </Link>
                        <p className="text-gray-700 mt-2 mb-4">{el.description}</p>
                        <span className="text-base font-semibold mb-2 mt-10">{el.address}</span>
                    </div>
                </div>
            </div>
        </>
    )
}