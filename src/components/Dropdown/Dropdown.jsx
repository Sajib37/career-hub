const Dropdown = ({handleDisplayJobs}) => {
    return (
        <details className="dropdown mb-32 absolute top-0 right-20">
            <summary className="m-1 btn">Select</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                <li onClick={() => handleDisplayJobs("all")}>
                    <a>All</a>
                </li>
                <li onClick={() => handleDisplayJobs("Remote")}>
                    <a>Remote</a>
                </li>
                <li onClick={() => handleDisplayJobs("Onsite")}>
                    <a>onsite</a>
                </li>
            </ul>
        </details>
    );
};

export default Dropdown;
