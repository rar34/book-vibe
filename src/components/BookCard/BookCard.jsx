import PropTypes from 'prop-types'
const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    return (
        <div className="card cursor-pointer bg-base-100 border p-6 border-[#13131326]">
            <figure><img className='h-56 bg-base-200 px-20 py-6 rounded-lg' src={image} alt="" /></figure>
            <div className="card-body">
                <p className='text-[#23BE0A] playfair font-medium'><span className='bg-[#23BE0A0D] px-4 py-2 rounded-xl'>{tags[0]}</span> <span className='bg-[#23BE0A0D] px-4 py-2 rounded-xl'>{tags[1]}</span></p>
                <h2 className="card-title">{bookName}</h2>
                <p className='text-[#131313CC] my-4 font-medium'>By: {author}</p>
                <hr />
                <div  className='font-medium flex justify-between'>
                    <p>{category}</p>
                    <p> <span>{rating}</span></p>
                </div>
            </div>
        </div>
    );
};


Book.propTypes = {
    book: PropTypes.object
}
export default Book;