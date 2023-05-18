

const Banner = () => {
    return (
        <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/modules/aei_imageslider/views/img/sample-1.jpg" className="w-full rounded-xl" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>

                        <div className="absolute transform right-28 -top-20 ">
                            <h1 className="   text-white font-bold text-5xl uppercase">Remote Car</h1>
                            <p className="text-white mt-8">The model of a car refers to a specific version
                                <br /> or variation of a vehicle within a particular make <br /> and denotes distinctive features and characteristic</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/modules/aei_imageslider/views/img/sample-3.jpg" className="w-full rounded-xl" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>

                        <div className="absolute transform right-28 -top-20 ">
                            <h1 className="   text-white font-bold text-5xl uppercase">Battery Car</h1>
                            <p className="text-white mt-8">The model of a car refers to a specific version
                                <br /> or variation of a vehicle within a particular make <br /> and denotes distinctive features and characteristic</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/modules/aei_imageslider/views/img/sample-2.jpg" className="w-full rounded-xl" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>

                        <div className="absolute transform left-28 -top-20 ">
                            <h1 className=" text-white font-bold text-5xl uppercase">New Arrival</h1>
                            <p className="text-white mt-8">The model of a car refers to a specific version
                                <br /> or variation of a vehicle within a particular make <br /> and denotes distinctive features and characteristic</p>
                        </div>

                        <a href="#slide1" className="btn btn-circle">❯</a>

                    </div>
                </div>
            </div>
    );
};

export default Banner;