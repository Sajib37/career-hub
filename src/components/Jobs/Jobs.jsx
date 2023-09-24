import { useLoaderData } from "react-router-dom";
import bg_1 from "../../assets/images/bg1.png";
import bg_2 from "../../assets/images/bg2.png";
import MainJob from "../MainJob/MainJob";
const Jobs = () => {
    const jobs = useLoaderData()

    return (
        <div>
            <div className="h-[35vh] w-full bg-[#ececf4] flex justify-center items-center relative">
                <img
                    className="max-w-[400px] absolute bottom-0 left-0"
                    src={bg_1}
                ></img>
                <h1 className="text-4xl font-bold">All Jobs are here</h1>
                <img className="absolute -top-20 right-0" src={bg_2}></img>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto my-8">
                {
                    jobs.map((job,idx)=><MainJob key={idx} job={job}></MainJob>)
                }
            </div>
        </div>
    );
};

export default Jobs;