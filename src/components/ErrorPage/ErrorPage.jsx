import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div><h3>Not Found</h3></div>
            }
        </div>
    );
};

export default ErrorPage;