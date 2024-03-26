import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";
import { saveBooks } from "../../utility/localStorageRead";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveWishList } from "../../utility/localStorageWish";



const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({});
    const { id } = useParams();
    const idInt = parseInt(id);
    const { books } = useBooksData();
    // console.log("check", singleBook);

    useEffect(() => {
        if (books) {
            const book = books.find(book => book.bookId === idInt);
            setSingleBook(book);
        }
    }, [books, idInt]);


    const handleReadBtn = (id) => {
        saveBooks(id);
        // toast("Added this book to the reading tab")

    }
    const handleWishlistBtn = (id) => {
        saveWishList(id);
        // toast("Added this book to the reading tab")

    }

    const { bookId, image, bookName, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = singleBook || {};
    console.log(tags)
    return (
        <div className="hero mt-10">
            <div className="hero-content gap-10 flex-col lg:flex-row">
                <img src={image} className="w-full lg:h-[630px] rounded-lg  bg-base-200 p-6 lg:p-16" />
                <div>
                    <h1 className="text-4xl playfair font-bold">{bookName}</h1>
                    <p className='text-[#131313CC] my-4 font-medium'>By: {author}</p>
                    <hr />
                    <p className="my-3 font-medium">{category}</p>
                    <hr />
                    <p className="py-6">{review}</p>
                    {/* <p> Tags: {tags?.length  }</p> */}
                    <p className="flex gap-4 font-bold">Tags: {
                        tags?.map((tag, idx) => <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-3xl" key={idx}>#{tag}</span>)
                    }</p>
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

                    <button onClick={() => handleReadBtn(bookId)} className="text-xl font-semibold px-7 py-5 rounded-lg border border-[#1313134D] mr-4 mt-4">Read</button>
                    <button onClick={() => handleWishlistBtn(bookId)} className="text-xl font-semibold px-7 py-5 rounded-lg bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;