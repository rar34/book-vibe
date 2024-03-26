import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";


const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({});
    const { id } = useParams();
    const { books } = useBooksData();
    console.log("check", singleBook);

    useEffect(() => {
        if (books) {
            const book = books.find(book => book.bookId == id);
            setSingleBook(book);
        }
    }, [books, id]);

    const { image, bookName, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = singleBook || {};
    return (
        <div className="hero">
            <div className="hero-content gap-10 flex-col lg:flex-row">
                <img src={image} className="max-w-sm w-full rounded-lg  bg-base-200 p-6 lg:p-16" />
                <div>
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className='text-[#131313CC] my-4 font-medium'>By: {author}</p>
                    <hr />
                    <p className="my-3 font-medium">{category}</p>
                    <hr />
                    <p className="py-6">{review}</p>
                    <p>Tags:</p>
                    <hr className="my-6" />


                    <div className="overflow-x-auto">
                        <table className="table">
                           
                            
                            <tbody>
                                
                                <tr>
                                    <td className="text-base">Number of Pages:</td>
                                    <td className="font-bold">{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className="text-base">Publisher:</td>
                                    <td className="font-bold">{publisher}</td>
                                </tr>
                                <tr>
                                    <td className="text-base">Year of Publishing:</td>
                                    <td className="font-bold">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className="text-base">Rating:</td>
                                    <td className="font-bold">{rating}</td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>

                    <button className="text-xl font-semibold px-7 py-5 rounded-lg border border-[#1313134D] mr-4 mt-4">Read</button>
                    <button className="text-xl font-semibold px-7 py-5 rounded-lg bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;