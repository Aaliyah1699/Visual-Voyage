import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

// Define the API URL with an API key from environment variables
const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
}`;

// Create a Gallery component to display images based on a search term
const Gallery = () => {
    const { searchTerm } = useGlobalContext();

    // Fetch images using a query with Axios and react-query
    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${searchTerm}`);

            return result.data;
        },
    });

    // Handle loading, error, and no results cases
    if (response.isLoading) {
        return (
            <section className='image-container'>
                <h4>Loading...</h4>
            </section>
        );
    }
    if (response.isError) {
        return (
            <section className='image-container'>
                <h4>There was an error...</h4>
            </section>
        );
    }

    const results = response.data.results;
    if (results.length < 1) {
        return (
            <section className='image-container'>
                <h4>No results found...</h4>
            </section>
        );
    }

    // Display the fetched images
    return (
        <section className='image-container'>
            {results.map((item) => {
                const url = item?.urls?.regular;
                return (
                    <img
                        src={url}
                        key={item.id}
                        alt={item.description}
                        className='img'
                    ></img>
                );
            })}
        </section>
    );
};

export default Gallery;
