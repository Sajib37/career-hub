import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/LocalStorage";
import bg_1 from "../../assets/images/bg1.png";
import bg_2 from "../../assets/images/bg2.png";
import AppliedJob from "../AppliedJob/AppliedJob";
import Dropdown from "../Dropdown/Dropdown";

const Applied = () => {
    const jobs = useLoaderData();
    const [jobsApplied, setJobsApplied] = useState([]);
    useEffect(() => {
        let appliedJobs = [];
        const storedJobsID = getStoredApplication();
        for (const job of jobs) {
            const isStore = storedJobsID.find((id) => id == job.id);
            if (isStore) {
                appliedJobs.push(job);
            }
        }
        setJobsApplied(appliedJobs);
    }, []);

    

    return (
        <div>
            <div className="h-[35vh] w-full bg-[#ececf4] flex justify-center items-center relative">
                <img
                    className="max-w-[400px] absolute bottom-0 left-0"
                    src={bg_1}
                ></img>
                <h1 className="text-4xl font-bold">Job Details</h1>
                <img className="absolute -top-20 right-0" src={bg_2}></img>
            </div>

            <div className="max-w-screen-xl mx-auto px-1 relative mt-4 pt-8">
                <Dropdown className=""></Dropdown>
                <div >
                    {jobsApplied.map((job, idx) => (
                        <AppliedJob key={idx} job={job}></AppliedJob>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Applied;
