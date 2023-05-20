import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-car-store-server.vercel.app/allToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data)
            })
    }, [user]);

    const handleDelete = (id) => {
        const proceed = confirm('Are You sere you want to delete') 
        
        if (proceed) {
            fetch(`https://toy-car-store-server.vercel.app/allToys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted Successful');
                        const remaining = myToys.filter(toys => toys._id !== id);
                        setMyToys(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h1 className="text-center text-5xl font-bold my-4">My <span className="text-purple-500">Toys</span></h1>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map((toys, index) =>
                            <tr key={toys._id}>

                                <th>{index + 1}</th>
                                <td>{toys.name}</td>
                                <td>{toys.category}</td>
                                <td>{toys.price}</td>
                                <td>{toys.quantity}</td>
                                <td>
                                    <Link to={`/updateToys/${toys._id}`}>
                                        <button className="btn btn-info">Update</button>
                                    </Link>
                                </td>
                                <td><button onClick={() => handleDelete(toys._id)} className="btn btn-warning">Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;