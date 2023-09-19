// import { useGlobalContext } from './context';

const SearchForm = () => {
    return (
        <section>
            <h1>Visual Voyage</h1>
            <form className='search-form'>
                <input
                    type='text'
                    className='form-input search-input'
                    name='search'
                    placeholder='flower'
                />
                <button type='submit' className='btn'>
                    Search
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
