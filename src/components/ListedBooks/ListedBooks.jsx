import { SlArrowDown } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";
import { getStoredBook } from "../../utility/localStorageRead";


const ListedBooks = () => {

    const { books } = useBooksData();
    const [bookList, setBookList] = useState([]);
    // console.log(books);

    useEffect(() => {
        const storedBooks = getStoredBook();
        console.log(storedBooks);
        if (books.length > 0) {
            // const bookStored = books.filter(book => storedBooks.includes(book.bookId))
            const storedBook = [];
            for (const id of storedBooks) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    storedBook.push(book);
                }
            }

            setBookList(storedBook);
            console.log(bookList)
        }
    }, [books?.length]);

    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center p-8 bg-base-200 my-9 rounded-2xl">Books</h2>
                <div className="dropdown dropdown-bottom flex justify-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-xl font-semibold text-white">Sort By <SlArrowDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publish Year</a></li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted tabs-lg">
                <NavLink role="tab" className="tab tab-active">Read Books</NavLink>
                <NavLink role="tab" className="tab">Wishlist Books</NavLink>
                <a role="tab" className="tab"></a>
                <a role="tab" className="tab"></a>
            </div>
        </div>
    );
};

export default ListedBooks;