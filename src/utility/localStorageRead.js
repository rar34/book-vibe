const getStoredBook = () => {
    const storedJobApplication = localStorage.getItem('read');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveBooks = (id) => {
    const storedJobApplications = getStoredBook();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('read', JSON.stringify(storedJobApplications));
    }

}

export { getStoredBook, saveBooks }