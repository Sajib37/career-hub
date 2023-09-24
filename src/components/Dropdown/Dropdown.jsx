const Dropdown = () => {
    return (
        <details className="dropdown mb-32 absolute top-0 right-20">
            <summary className="m-1 btn">All</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                <li>
                    <a>All</a>
                </li>
                <li>
                    <a>Remote</a>
                </li>
                <li>
                    <a>onsite</a>
                </li>
            </ul>
        </details>
    );
};

export default Dropdown;
