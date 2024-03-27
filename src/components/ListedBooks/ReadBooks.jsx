import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ReadBooks = ({ bookLists }) => {
    console.log(bookLists)

    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = bookLists;

    return (
        <div className="border-2 rounded-xl my-6">
            <div className="flex gap-14 p-10 items-center flex-col lg:flex-row">
                <img src={image} className="rounded-lg bg-base-200 p-4 lg:py-7 gap-10 h-[330px] lg:px-12" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">By: {author}</p>
                    <p className="flex items-center gap-4 font-bold">Tags: {
                        tags?.map((tag, idx) => <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-3xl" key={idx}>#{tag}</span>)
                    } <span className="font-medium">Year of Publishing: {yearOfPublishing}</span></p>

                    <p className="my-4 text-[#13131399] font-medium flex gap-10"><span>Publisher: {publisher}</span> <span>Pages: {totalPages}</span></p>
                    <hr className="my-6" />
                    <div className="flex gap-4">
                        <p className="px-5 py-3 rounded-3xl bg-[#328EFF26]">Category: {category}</p>
                        <p className="px-5 py-3 rounded-3xl bg-[#FFAC3326]">Rating: {rating}</p>
                        <Link to=""><button className="px-5 py-3 rounded-3xl text-white bg-[#23BE0A]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBooks.propTypes = {
    bookLists: PropTypes.object
}

export default ReadBooks;