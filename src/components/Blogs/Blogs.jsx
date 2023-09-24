import { useLoaderData } from "react-router-dom";
import bg_1 from "../../assets/images/bg1.png";
import bg_2 from "../../assets/images/bg2.png";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className=" ">
            <div className="h-[35vh] w-full bg-[#ececf4] flex justify-center items-center relative">
                <img
                    className="max-w-[400px] absolute bottom-0 left-0"
                    src={bg_1}
                ></img>
                <h1 className="text-3xl md:text-5xl font-bold text-center">Blogs are Here:</h1>
                <img className="absolute -top-20 right-0" src={bg_2}></img>
            </div>
            
            <div className="flex flex-col gap-4 max-w-screen-xl mx-auto">
                {
                    blogs.map((blog)=><Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;