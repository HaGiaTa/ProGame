import React, { useEffect, useState } from 'react';

const Products = () => {
    const Products = () => {
        const [data, setData] = useState();

        const getData = async () => {
            const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'efb1e1682amshba56f501508d8eap1be802jsn6676af8143b8',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result)
            } catch (error) {
                console.error(error);
            }
        }
        // Fetch data on component mount and whenever the props change.
        useEffect(() => {
            getData()
        }, []);
        return <WrappedComponent data={data} {...props} />;
    };

    return Products;

};
export default Products;