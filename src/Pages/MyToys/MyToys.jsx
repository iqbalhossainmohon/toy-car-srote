import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/allToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyToys(data)
        })
    },[user]);

    return (
        <div>
            <h1>My Toys</h1>

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

export default MyToys;