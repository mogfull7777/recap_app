import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Card, Col, Container, Image, ListGroup, Row, Form, Button} from "react-bootstrap";

const Detail = () => {

    const params = useParams();

    // 데이터를 던져 변수에 해당 하는 부분을 들고 옴.
    // useParams() => api를 들고 오는 훅. 같은 계열로 useStats, useEffact 가 있다.

    const [product, setProduct] = useState({})
    const [qty, setQty] = useState(0)

    const getProduct = async () => {

        try {

            const { data, status } = await axios.get(`http://localhost:9090/api/products/${params.productId}`)

            // 상수 값에 할당 되었는지 안되었는지 확인. (영화앱을 복습하자.)

            if (status === 200) {

                setProduct(data) // => 할당이 되면 useState의 product 값이 할당 됨.

            }


        } catch (err) {

            console.log(err)

        }

    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <Container>
            <Link className={"btn btn-light my-3"} to={"/"}>
                Go Back
            </Link>

            <>
                <Row>
                    {/* 줄 */}
                    <Col md={4}>
                        {/*칼럼 (칸)*/}
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant={"flush"}>

                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h3>{product.rating}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price : ${product.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description : {product.description}
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <ListGroup variant={"flush"}>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>price:</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status</Col>
                                        <Col>
                                            {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                QTY
                                            </Col>
                                            <Col>
                                                <Form.Control
                                                    as={"select"}
                                                    value={qty}
                                                    onChange={e => setQty(e.target.value)}
                                                >
                                                    {[...Array(product.countInStock).keys()].map(
                                                        (x) => (
                                                            <option key = {x + 1} value={x + 1}>
                                                                {x+1}
                                                            </option>
                                                        )
                                                    )}

                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Button
                                        className={"btn-block"}
                                        type={"button"}
                                        disabled={product.countInStock === 0}
                                    >
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                {/* 4번 이상! 하루 2시간 이상!   */}
                {/*  전에 했던 프로젝트 복습. 30개 40개  */}
                {/*  제품 가짓수도 늘리고 카테고리 다 다르게 늘리기 (개당 3에서 4개) */}


                </Row>
            </>

        </Container>
    );
};

export default Detail;