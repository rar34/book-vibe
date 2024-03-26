const getStoredWishlist = () => {
    const storedJobApplication = localStorage.getItem('wishlist');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveWishList = (id) => {
    const storedWishlist = getStoredWishlist();
    const exists = storedWishlist.find(jobId => jobId === id);
    if (!exists) {
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
    }

}

export { getStoredWishlist, saveWishList }