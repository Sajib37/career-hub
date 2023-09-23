import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeturedJobs] = useState([]);
    useEffect(() => {
        fetch('./data/jobs.json')
            .then(res => res.json())
            .then(data => setFeturedJobs(data));
    },[])
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
                {
                    featuredJobs.map((job,idx)=><FeaturedJob key={idx} job={job}></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
