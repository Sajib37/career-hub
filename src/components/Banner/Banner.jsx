import userImage from "./../../assets/images/user.png";
const Banner = () => {
    return (
        <div className="bg-[#ececf4]">
            <div className=" flex flex-col-reverse lg:flex-row justify-around items-center max-w-screen-xl mx-auto px-2 pt-8">
                <div className="max-w-lg space-y-3 text-center lg:text-start">
                    <h1 className="text-5xl font-bold">
                        One Step <br></br> Closer To Your <br></br>
                        <span className="text-[#A2ADFE]">Dream Job</span>
                    </h1>
                    <p className="text-gray-400">
                        Explore thousands of job opportunities with all the
                        information you need. Its your future. Come find it.
                        Manage all your job application from start to finish.
                    </p>
                    <button
                        type="button"
                        className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                    >
                        Get started
                    </button>
                </div>

                <div>
                    <img className="max-w-xs md:max-w-lg" src={userImage}></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;
