import { ToastContainer, toast } from 'react-toastify';
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
    const exists = storedBooks.find(jobId => jobId === id);
    if (!exists) {
        storedBooks.push(id);
        toast("added successfully")
        localStorage.setItem('read', JSON.stringify(storedBooks));
    }else{
        toast("Book is already exist")
    }

}
export { getStoredBook, saveBooks }
{/* <ToastContainer></ToastContainer> */}