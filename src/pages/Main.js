import React, {useEffect, useState} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

const Main = () => {

    const carouseItem = [
        {
            "id" : "1",
            "title" : "d-block w-100",
            "desc" : "First slide",
            "img" : require('../img/one.jpg'),
            "label" : "Make a gift!"
        },
        {
            "id" : "2",
            "title" : "d-block w-100",
            "desc" : "Second slide",
            "img" : require('../img/two.jpg'),
            "label" : "Let's think of the Earth together!"
        },
        {
            "id" : "3",
            "title" : "d-block w-100",
            "desc" : "Third slide",
            "img" : require('../img/three.jpg'),
            "label" : "Your environment will improve!"
        }
    ];

    const [products, setProducts] = useState([]);

    const getProducts = async () => {

        try {

            const {data, status} = await axios.get("http://localhost:9090/api/products")

            console.log("$$$$$$$$$$$", data, status)

            setProducts(data.products)



        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() =>{
        getProducts()
    }, [])

    return (
            <>
                <Carousel nextLabel={""} prevLabel={""}>
                    {carouseItem && carouseItem.map(e => (
                        <Carousel.Item>
                            <img
                                className={e.title}
                                src={e.img}
                                alt={e.desc}
                            />
                            <Carousel.Caption>
                                <h3 className="text-white">{e.desc}</h3>
                                {e.label}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <Container style={{marginTop : '3rem'}}>
                    <Row>
                        {products && products.map(e => (
                            <Col className={""}>
                                <Card style={{ width: '18rem', marginTop: '3rem'}}>
                                    <Card.Img variant="top" src="data:image/jpeg;base64,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"/>
                                    <Card.Body>
                                        <Card.Title>
                                            {e.name}
                                        </Card.Title>
                                        <Card.Text>
                                            {e.brand}
                                        </Card.Text>
                                        <Card.Text>
                                            {e.category}
                                        </Card.Text>
                                        <Link to={`/${e._id}`}>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>


    );
};

export default Main;