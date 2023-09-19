import { useGlobalContext } from './context';

// Create a SearchForm component for inputting search terms
const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();

    // Handle form submission to set the search term
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return;
        setSearchTerm(searchValue);
    };

    // Render the search form
    return (
        <section>
            <h1 className='title'>Visual Voyage</h1>
            <form className='search-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='form-input search-input'
                    name='search'
                    placeholder='halloween'
                />
                <button type='submit' className='btn'>
                    Search
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
