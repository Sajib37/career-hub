const Catagory = ({ catagory }) => {
    const { id, logo, category_name, availability } = catagory;
    return (
        <div className="w-72 bg-[#7e8ffe18] h-56 p-4 rounded-xl mx-auto">
            <div className="w-16 rounded-lg bg-[#7e8ffe3a] p-2">
                <img className="w-full" src={logo}></img>
            </div>
            <div className="mt-6 space-y-2">
                <h1 className="text-2xl font-semibold">{category_name}</h1>
                <h1 className="text-gray-400 text-lg">{availability}</h1>
            </div>
        </div>
    );
};

export default Catagory;
