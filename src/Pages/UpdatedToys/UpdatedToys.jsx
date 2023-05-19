import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const UpdatedToys = () => {

    const { user } = useContext(AuthContext);
    const toys = useLoaderData();

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const result = {email, name, category, price, quantity};
        console.log(result);

        fetch(`http://localhost:5000/allToys/${toys._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h1>Updated Toys{toys.name}</h1>

            <div className="hero min-h-screen bg-base-200 ">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Update Toys</h1>

                        <form onSubmit={handleUpdate}>
                            <div className="form-control mt-2">
                                <input type="email" name="email" value={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-4">
                                <input type="text" name="name" defaultValue={toys.name} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <input type="text" name="category" defaultValue={toys.category} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <input type="text" name="price" defaultValue={toys.price} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <input type="text" name="quantity" defaultValue={toys.quantity} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Update Toys" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatedToys;