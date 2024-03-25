
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl my-14">
            <div className="hero-content lg:p-24 flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/JpRBNh8/banner.png" className="max-w-sm" />
                <div>
                    <h1 className="text-3xl lg:text-6xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-xl font-bold text-white mt-10">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;