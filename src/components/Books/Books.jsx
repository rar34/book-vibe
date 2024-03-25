import Book from "../BookCard/BookCard";
import useBooksData from "../Hooks/useBooksData";

const Books = () => {
    const {books} = useBooksData();
    return (
        <div className="my-10">
            <h2 className="text-[40px] font-bold text-center my-10 playfair">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;