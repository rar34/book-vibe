import { SlArrowDown } from "react-icons/sl";
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
            {/* <div role="tablist" className="tabs tabs-lifted tabs-lg">
                <Link onClick={() => setTabIndex(0)} to={'read-book'} role="tab" className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}>Read Books</Link>
                <Link onClick={() => setTabIndex(1)} to={`wishlist`} role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>

            </div> */}
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