import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";


const LatestToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-5xl font-bold text-center my-8">Latest <span className="text-purple-500">Toys</span></h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
               {
                toys.map(toy=> <ToysCard
                key={toy.id}
                toy={toy}
                />)
               }
            </div>
        </div>
    );
};

export default LatestToys;