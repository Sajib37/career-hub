import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState(2);
    useEffect(() => {
        fetch("./data/jobs.json")
            .then((res) => res.json())
            .then((data) => setFeturedJobs(data));
    }, []);

    const handleShowMore = () => {
        let dl = dataLength + 2;
        if (dl < featuredJobs.length) {
            setDataLength(dl);
        }
        else[
            setDataLength(featuredJobs.length)
        ]
    }

    return (
        <div className="max-w-screen-xl mx-auto my-12">
            <div className="mb-8 text-center space-y-2">
                <h1 className="text-5xl font-bold ">Featured Jobs</h1>
                <p className="text-gray-400">
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
                {featuredJobs.slice(0,dataLength).map((job, idx) => (
                    <FeaturedJob key={idx} job={job}></FeaturedJob>
                ))}
            </div>

            <div className="flex items-center justify-center">
                <button
                    className={`mt-4 bg-gradient-to-r from-[#8C9CFE] to-[#9774FF] w-36 p-3 rounded-xl text-white font-medium ${dataLength===featuredJobs.length?'hidden':''}`}
                onClick={handleShowMore}>
                    
                    Show more jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
