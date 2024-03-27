import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";
import { getStoredBook } from "../../utility/localStorageRead";
import ReadBooks from "./ReadBooks";


const ListedBooks = () => {

    const { books } = useBooksData();
    const [bookList, setBookList] = useState([]);

    const [tabIndex, setTabIndex] = useState(0);

    console.log(bookList)
    // console.log(books);

    useEffect(() => {
        const storedBooks = getStoredBook();
        // console.log(storedBooks);
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
                <Link onClick={()=> setTabIndex(0)} to={''} role="tab" className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}>Read Books</Link>
                <Link onClick={()=> setTabIndex(1)} to={`wishlist`} role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>
                <a role="tab" className="tab"></a>
                <a role="tab" className="tab"></a>
            </div>
            <div className="mb-10">
                {
                    bookList?.map(book => <ReadBooks key={book.bookId} bookLists={book}></ReadBooks>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;