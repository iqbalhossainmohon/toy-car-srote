import { useForm } from "react-hook-form";

const AddAToys = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="text-center bg-gray-400">
            <div className="py-20">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-2">
                        <input
                            className="h-12 w-1/4 px-3 py-2 border border-purple-400 rounded-md mr-4"
                            {...register("name", { required: true })}
                            placeholder="Toy name"
                        />

                        <select className="h-12 w-1/4 px-3 py-2 border border-purple-400 rounded-md" {...register("category")}
                            placeholder="category"
                        >
                            <option value="Toy Cars">Toy Cars</option>
                            <option value="Ride-on Cars">Ride-on Cars</option>
                            <option value="RC Cars">RC Cars</option>
                        </select>
                    </div>

                    <div className="my-2">
                        <input
                            className="h-12 w-1/4 px-3 py-2 border border-purple-400 rounded-md mr-4 "
                            {...register("price", { required: true })}
                            placeholder="price"
                        />
                        <input
                            className="h-12 w-1/4 px-3 py-2 border border-purple-400 rounded-md "
                            {...register("quantity")}
                            placeholder="quantity"
                        />
                    </div>
                    <input
                        className="h-12 w-2/4 px-3 py-2 border border-purple-400 rounded-md my-2"
                        {...register("photoURL")}
                        placeholder="photo url"
                    />
                    <br />
                    <input className="submit-btn btn btn-primary mb-8 w-2/4" value="Add Toys" type="submit" />
                </form >
            </div>
        </div>
    );
};

export default AddAToys;