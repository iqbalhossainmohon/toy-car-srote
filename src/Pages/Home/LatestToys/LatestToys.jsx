import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";


const LatestToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toyGallery')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-5xl font-bold text-center my-8">Toys <span className="text-purple-500">Gallery</span></h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
               {
                toys.map(toy=> <ToysCard
                key={toy._id}
                toy={toy}
                />)
               }
            </div>
        </div>
    );
};

export default LatestToys;