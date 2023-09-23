import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="h-[100vh] bg-teal-100 flex flex-col items-center justify-center space-y-8">
            <h1 className="text-3xl font-bold">Opps!!!!</h1>
            <p className="text-2xl font-semibold">{error.status} - <span>{error.statusText}</span></p>
            <p className="text-lg font-semibold">{ error.data}</p>
        </div>
    );
};

export default ErrorPage;