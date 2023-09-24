import { BiLocationPlus } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
const MainJob = ({ job }) => {
    const {
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        job_type,
        location,
        salary,id
    } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-lg border-2 rounded-lg py-6">
            <figure>
                <img src={logo} alt="Company Logo" />
            </figure>
            <div className="card-body">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">{job_title}</h1>
                    <p className="text-lg font-medium text-gray-500">
                        {company_name}
                    </p>
                </div>
                <div className="flex gap-4 justify-center">
                    <div className="border-2 rounded-md w-28 h-8 flex justify-center items-center font-medium text-[#8C9CFE]">{ remote_or_onsite}</div>
                    <div className="border-2 rounded-md w-28 h-8 flex justify-center items-center font-medium text-[#8C9CFE]">{ job_type}</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 text-gray-500 lg:flex-row lg:gap-12">
                    <div className="flex gap-2">
                        <BiLocationPlus className="text-xl"></BiLocationPlus>
                        <p>{location}</p>
                    </div>
                    <div className="flex gap-2 ">
                        <BiDollarCircle className="text-xl"></BiDollarCircle>
                        <p>Salary: {salary}</p>
                    </div>
                </div>
                <div className=" flex justify-center">
                        <button type="button" className="mt-3 bg-gradient-to-r from-[#8C9CFE] to-[#9774FF] w-28 p-3 rounded-xl text-white font-medium">
                            View details
                        </button>
                </div>
            </div>
        </div>
    );
};

export default MainJob;