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
        localStorage.setItem('read', JSON.stringify(storedBooks));
    }

}

export { getStoredBook, saveBooks }