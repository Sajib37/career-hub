import { useLoaderData, useParams } from "react-router-dom";
import bg_1 from "../../assets/images/bg1.png";
import bg_2 from "../../assets/images/bg2.png";
import { BiDollar,BiLocationPlus } from "react-icons/bi";
import { MdSubtitles,MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
const JobDetails = () => {
    const jobs = useLoaderData([]);
    const { id } = useParams();
    const job = jobs.find((job) => job.id == id);
    const {
        job_title,
        salary,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information,
    } = job;
    const { phone, email, address } = contact_information;
    return (
        <div>
            <div className="h-[35vh] w-full bg-[#ececf4] flex justify-center items-center relative">
                <img className="max-w-[400px] absolute bottom-0 left-0" src={bg_1}></img>
                <h1 className="text-4xl font-bold">Job Details</h1>
                <img className="absolute -top-20 right-0" src={bg_2}></img>
            </div>
            <div className="max-w-screen-xl mx-auto my-24 grid grid-cols-2 lg:grid-cols-3 gap-4 px-1 text-gray-500">
                <div className="col-span-2 ">
                    <div className="">
                        <p className="font-bold text-lg mb-2 text-black">job description: </p>
                        <p>{job_description}</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg mb-2 mt-4 text-black">Job responsibility: </p>
                        <p>{job_responsibility}</p>
                    </div>
                    
                    <div>
                        <p className="font-bold text-lg mb-2 mt-4 text-black">Educational Requirements:</p>
                        <p>{ educational_requirements}</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg mb-2 mt-4 text-black">Experiences:</p>
                        <p>{ experiences}</p>
                    </div>
                </div>
                <div className=" col-span-2 lg:col-span-1 ">
                    <div className="bg-[#ececf4] rounded-md py-4  px-2">
                        <h1 className="font-bold text-base text-black mb-4">Job Details:</h1>
                        <hr className="py-[1px] bg-gray-400"></hr>
                        <div className="my-4 space-y-2">
                            <p className="flex items-center "><BiDollar className="text-[#6856dc] font-bold mr-2"></BiDollar> <span className="font-semibold text-black">Salary :</span>{ salary} (per month)</p>
                            <p className="flex items-center "><MdSubtitles className="text-[#6856dc] font-bold mr-2"></MdSubtitles> <span className="font-semibold text-black">Job Title :</span>{ job_title}</p>
                        </div>
                        {/* contact information */}
                        <h1 className="font-bold text-base text-black mb-4">Contact Information:</h1>
                        <hr className="py-[1px] bg-gray-400"></hr>
                        <div className="my-4 space-y-2">
                            <p className="flex items-center "><BsFillTelephoneInboundFill className="text-[#6856dc] font-bold mr-2"></BsFillTelephoneInboundFill> <span className="font-semibold text-black">Phone :</span>{ phone}</p>
                            <p className="flex items-center "><MdOutlineEmail className="text-[#6856dc] font-bold mr-2"></MdOutlineEmail> <span className="font-semibold text-black">Email :</span>{ email}</p>
                            <p className="flex  "><BiLocationPlus className="text-[#6856dc] font-bold mr-2 text-2xl"></BiLocationPlus> <span className="font-semibold text-black">Address: </span> { address}</p>
                        </div>
                        <button className="w-full text-white btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
