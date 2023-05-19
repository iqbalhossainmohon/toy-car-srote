import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
                console.log(result);
            })
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-4">All <span className="text-purple-500">Toys</span></h1>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>View Details</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map((toys, index) =>
                            <tr key={toys._id}>

                                <th>{index + 1}</th>
                                <td>{toys.name}</td>
                                <td>{toys.category}</td>
                                <td>{toys.price}</td>
                                <td>{toys.quantity}</td>
                                <td><Link to={`/allToys/${toys._id}`}>
                                    <button className="btn btn-info">Details</button>
                                    </Link>
                                    </td>
                                <td><button className="btn btn-info">Update</button></td>
                                <td><button className="btn btn-warning">Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;