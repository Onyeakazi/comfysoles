
const Error = () => {
    return (
        <div className="lg:container mx-auto flex items-center justify-center">
            <div className="min-h-[400px] w-full flex flex-col items-center justify-center">
                <h3 className="text-9xl text-red-500 font-inter font-bold capitalize">404</h3>
                <h3 className="text-4xl text-red-500 font-inter font-bold capitalize">Could not find this page!</h3>
            </div>
        </div>
    );
}

export default Error;
