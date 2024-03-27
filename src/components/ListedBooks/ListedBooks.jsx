import 'react-tabs/style/react-tabs.css';
import useBooksData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";
import { getStoredBook, getStoredWishlist } from "../../utility/localStorageRead";
import ReadBooks from "./ReadBooks";
import WishlistBooks from "./WishlistBooks";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const ListedBooks = () => {

    const { books } = useBooksData();
    const [bookList, setBookList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sortBy, setSortBy] = useState(null);



    useEffect(() => {
        const storedBooks = getStoredBook();
        if (books.length > 0) {
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

    useEffect(() => {
        const storedWishLists = getStoredWishlist();
        // console.log(storedBooks);
        if (books.length > 0) {
            const storedWishList = [];
            for (const id of storedWishLists) {
                const wish = books.find(wish => wish.bookId === id);
                if (wish) {
                    storedWishList.push(wish);
                }
            }

            setWishList(storedWishList);

        }
    }, [books?.length]);


    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        let sortedBooks = [...bookList];
        switch (e.target.value) {
            case 'rating':
                sortedBooks.sort((a, b) => b.rating - a.rating);
                break;
            case 'pages':
                sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
                break;
            case 'publishYear':
                sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); // Sort from most recent year to oldest
                break;
            default:
                break;
        }
        setBookList(sortedBooks);
    };


    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center p-8 bg-base-200 my-9 rounded-2xl">Books</h2>
                <div className="dropdown dropdown-bottom flex justify-center">
                    <select value={sortBy} onChange={handleSortChange} className="btn m-1 bg-[#23BE0A] text-xl font-semibold text-white">
                        <option value="">Sort By</option>
                        <option value="rating">Rating</option>
                        <option value="pages">Number of Pages</option>
                        <option value="publishYear">Publish Year</option>
                    </select>
                </div>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            bookList?.map(book => <ReadBooks key={book.bookId} bookLists={book}></ReadBooks>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            wishList?.map(wish => <WishlistBooks key={wish.bookId} wish={wish}></WishlistBooks>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;