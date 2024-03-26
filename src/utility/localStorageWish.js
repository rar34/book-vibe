const getStoredWishlist = () => {
    const storedJobApplication = localStorage.getItem('wishlist');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveWishList = (id) => {
    const storedJobApplications = getStoredWishlist();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedJobApplications));
    }

}

export { getStoredWishlist, saveWishList }