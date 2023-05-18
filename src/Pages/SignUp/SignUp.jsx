import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                alert('User Created Successful')
            }
            form.reset();
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200 my-8">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>

                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="file" name="photo" placeholder="photo url" className="input input-bordered p-2" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center my-3"><small>Already have an account? </small><Link to='/login' className="text-orange-500 font-bold">Login</Link></p>
                    </div>
                </div>
        </div>
    );
};

export default SignUp;