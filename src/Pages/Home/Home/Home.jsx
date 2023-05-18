import { FaShippingFast, FaDollarSign, FaHeadset } from "react-icons/fa";
import LatestToys from "../LatestToys/LatestToys";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            
            <div className="md:flex justify-center gap-6 my-12">
                <div className="flex items-center my-2 gap-4 p-3 border-2 rounded-md border-gray-500">
                    <div>
                        <FaShippingFast className="w-16 h-16" />
                    </div>
                    <div>
                    <h5 className="font-bold uppercase">Free Worldwide Shipping</h5>
                    <p className="text-gray-400">All Order</p>
                    </div>
                </div>
                <div className="flex items-center my-2 gap-4 p-3 border-2 rounded-md border-gray-500">
                    <div>
                        <FaDollarSign className="w-16 h-16" />
                    </div>
                    <div>
                    <h5 className="font-bold uppercase">Money Back Guarantee</h5>
                    <p className="text-gray-400">If You Are Unable</p>
                    </div>
                </div>
                <div className="flex items-center my-2 gap-4 p-3 border-2 rounded-md border-gray-500">
                    <div>
                        <FaHeadset className="w-16 h-16" />
                    </div>
                    <div>
                    <h5 className="font-bold uppercase">24 / 7 Online support</h5>
                    <p className="text-gray-400">Call Us Anytime You Want</p>
                    </div>
                </div>
            </div>
            

            <div className="md:flex gap-6">
                <div className="my-4">
                    <img className="relative rounded-xl" src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/modules/aei_cmscategory/views/img/cat-1.jpg" alt="" />
                    <h3 className="absolute font-bold text-5xl -mt-48 ml-80">Ride on care</h3>
                </div>
                <div className="my-4">
                    <img className="relative rounded-xl" src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/modules/aei_cmscategory/views/img/cat-2.jpg" alt="" />
                    <h3 className="absolute font-bold text-5xl -mt-48 ml-80">Powerfull Moters</h3>
                </div>
            </div>

            <div>
                <LatestToys/>
            </div>


        </div>

    );
};

export default Home;