import { Link } from "react-router-dom";


const ToysCard = ({ toy }) => {
    const { _id, name, descriptions, price, img } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img className="h-48 w-48" src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{name}</h2>
                <p className="font-bold">Price: ${price}</p>
                <p>{descriptions}</p>
                <div className="card-actions justify-end">
                    <Link to={`/toyDetails/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;