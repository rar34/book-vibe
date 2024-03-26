import PropTypes from 'prop-types'
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Book = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;
    return (
        <Link to={`/book-detail/${bookId}`}>
            <div className="card cursor-pointer bg-base-100 border p-6 border-[#13131326]">
                <figure><img className='h-56 bg-base-200 px-20 py-6 rounded-lg' src={image} alt="" /></figure>
                <div className="card-body">
                    <p className='text-[#23BE0A] font-medium'><span className='bg-[#23BE0A0D] px-4 py-2 rounded-xl'>{tags[0]}</span> <span className='bg-[#23BE0A0D] px-4 py-2 rounded-xl'>{tags[1]}</span></p>
                    <h2 className="card-title playfair text-2xl font-bold">{bookName}</h2>
                    <p className='text-[#131313CC] my-4 font-medium'>By: {author}</p>
                    <hr />
                    <div className='font-medium flex mt-4 justify-between'>
                        <p>{category}</p>
                        <p className='flex items-center gap-2'> <span>{rating}</span> <FaRegStar className='text-2xl'></FaRegStar></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};


Book.propTypes = {
    book: PropTypes.object
}
export default Book;