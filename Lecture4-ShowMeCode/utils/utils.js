export let getFilteredData = (searchText, restaurant) => {
    return restaurant?.filter((element) => element?.data?.name?.toLowerCase().includes(searchText?.toLowerCase()));
}


// to create utils it will help us to create a component readable(no need to find the logic through file)
// ,reusable(we can reuse the code multiple places ).
// testable (we can write seprate test cases for these file)
// maintanable (we can maintain the code )

// modularity ==> broken down the code with meaningfull pieces 
