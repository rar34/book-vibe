import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredBook = () => {
    const storedJobApplication = localStorage.getItem('read');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveBooks = (id) => {
    const storedBooks = getStoredBook();
    const exists = storedBooks.find(bookId => bookId === id);
    if (!exists) {
        storedBooks.push(id);
        toast("added successfully")
        localStorage.setItem('read', JSON.stringify(storedBooks));
    }else{
        toast("Book is already exist")
    }
}

const getStoredWishlist = () => {
    const storedJobApplication = localStorage.getItem('wishlist');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveWishList = (id) => {
    const storedWishlist = getStoredWishlist();
    const storedBooks = getStoredBook();
    const exists1 = storedWishlist.find(wishBookId => wishBookId === id);
    const exists2 = storedBooks.find(bookId => bookId === id);
    if (!exists1 && !exists2) {
        storedWishlist.push(id);
        toast("added successfully")
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
    }
    // if () {
    //     storedWishlist.push(id);
    //     toast("added successfully")
    //     localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
    // }
    else{
        toast("Book is already exist")
    }
}

export { getStoredBook, saveBooks , getStoredWishlist,saveWishList}