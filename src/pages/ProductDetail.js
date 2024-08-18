import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/detail.css'
import { Carousel } from 'antd';

export const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const contentStyle = {
        width: '100%',
        height: '400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const getDataDetail = async () => {
        const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
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
            setProduct(result)
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDataDetail()
    }, [])

    return (
        <div className='detail'>
            <div className='slide-product'>
                <Carousel style={{ width: '100%' }} autoplay>
                    {
                        product?.screenshots?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img style={contentStyle} src={item.image} />
                                </div>
                            )
                        })
                    }


                </Carousel>
            </div>

            <div className='description'>
                <h3>{product?.title}</h3>
                <p>Price: ${(product?.id * 23)?.toLocaleString()}</p>
                <p>{product?.description}</p>
            </div>


        </div>

    )
}
