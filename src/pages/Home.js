import { Carousel } from 'antd';
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const HomeApp = () => {
    const [data, setData] = useState();
    const navigate = useNavigate()
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
            setData(result.slice(0, 30));
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    // Fetch data on component mount and whenever the props change.
    useEffect(() => {
        getData()
    }, []);
    console.log("data======: ", data);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className='slide-img'>
            <Carousel afterChange={onChange}>
                <div>
                    <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/hinh-nen-game.jpg" width="1303px" height="630"></img>
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/e3/d8/86/e3d8864c08a1cae52cf5a4b3264e3f76.jpg" width="1303px" height="630"></img>
                </div>
                <div>
                    <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-lien-quan-54.jpg" width="1303px" height="630"></img>
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi_webp/ztNoBI0m_P0/maxresdefault.webp" width="1303px" height="630"></img>
                </div>
                <div>
                    <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-ff-1.jpg" width="1303px" height="630"></img>
                </div>
            </Carousel>
            <div className='products-container'>
                {
                    data?.map((item, index) => {
                        return (
                            <Card
                                onClick={() => navigate(`product/${item.id}`)}
                                hoverable
                                style={{
                                    width: 350,
                                }}
                                cover={<img alt="example" src={item.thumbnail} />}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.short_description}</p>
                                <h4>Price: ${(item.id * 23).toLocaleString()}</h4>


                            </Card>
                        )
                    })
                }


            </div>

        </div>

    );

};

export default HomeApp;