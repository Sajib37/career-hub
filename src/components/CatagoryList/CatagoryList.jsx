import { useEffect, useState } from "react";
import Catagory from "../Catagory/Catagory";

const CatagoryList = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch("./data/categories.json")
            .then((res) => res.json())
            .then((data) => setCatagories(data));
    }, []);
    console.log(catagories);
    return (
        <div className="max-w-screen-xl mx-auto text-center  my-16 flex flex-col gap-8">
            <div className="space-y-2">
            <h1 className="text-4xl font-bold">Job Category List</h1>
                <p className="text-gray-400">
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                </p>
            </div>
            <div className="flex gap-4 px-4  justify-between flex-col md:flex-row md:flex-wrap">
                {catagories.map((catagory, idx) => (
                    <Catagory key={idx} catagory={catagory}></Catagory>
                ))}
            </div>
        </div>
    );
};

export default CatagoryList;
