import { BiLocationPlus } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
const AppliedJob = ({ job }) => {
    const {
        job_title,
        salary,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information,
        logo,
        company_name,
        location,
        job_type,
        remote_or_onsite
    } = job;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 border-2 my-8 items-center p-4 mx-auto">
            <div className="w-48 h-48 bg-[#F4F4F4] flex justify-center items-center p-2 mx-auto">
                <img src={logo}></img>
            </div>

            <div className="lg:col-span-2 space-y-2 mx-auto">
                <h1 className="text-2xl font-bold">{job_title}</h1>
                <p className="text-lg font-medium text-gray-500">{company_name}</p>
                <div className="flex gap-4">
                    <div className="border-2 rounded-md w-28 h-8 flex justify-center items-center font-medium text-[#8C9CFE]">{ remote_or_onsite}</div>
                    <div className="border-2 rounded-md w-28 h-8 flex justify-center items-center font-medium text-[#8C9CFE]">{ job_type}</div>
                </div>

                <div className="flex flex-col text-gray-500 lg:flex-row lg:gap-12">
                    <div className="flex gap-2">
                        <BiLocationPlus className="text-xl"></BiLocationPlus>
                        <p>{location}</p>
                    </div>
                    <div className="flex gap-2 ">
                        <BiDollarCircle className="text-xl"></BiDollarCircle>
                        <p>Salary: {salary}</p>
                    </div>
                </div>
            </div>


            <button
                className="w-32 mx-auto mt-4 text-white btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                View Details
            </button>
        </div>
    );
};

export default AppliedJob;
