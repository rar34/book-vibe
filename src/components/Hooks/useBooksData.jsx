import { useEffect, useState } from "react";

const useBooksData = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/books.json');
            const data = await res.json();
            setBooks(data);
        }
        fetchData();
    }, []);

    return {books};
};

export default useBooksData;