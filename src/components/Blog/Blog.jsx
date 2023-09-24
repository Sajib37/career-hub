const Blog = ({ blog}) => {
    const { id, blog_title, writer, date, blog_details } = blog;
    return (
        <div className="border-2 border-teal-600 rounded-md p-4 mx-2">
            <h1 className="font-bold text-xl">{blog_title}</h1>
            <p className="text-justify space-y-1 my-4">{blog_details}</p>
            <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-right">{writer}</h3>
                <p className=" text-right">{ date}</p>
            </div>
        </div>
    );
};

export default Blog;