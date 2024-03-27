// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const getStoredWishlist = () => {
//     const storedJobApplication = localStorage.getItem('wishlist');
//     if (storedJobApplication) {
//         return JSON.parse(storedJobApplication);
//     }
//     return [];
// }

// const saveWishList = (id) => {
//     const storedWishlist = getStoredWishlist();
//     const exists = storedWishlist.find(jobId => jobId === id);
//     if (!exists) {
//         storedWishlist.push(id);
//         toast("added successfully")
//         localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
//     }else{
//         toast("Book is already exist")
//     }

// }

// export { getStoredWishlist, saveWishList }