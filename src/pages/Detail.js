import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const params = useParams();

    // 데이터를 던져 변수에 해당 하는 부분을 들고 옴.
    // useParams() => api를 들고 오는 훅. 같은 계열로 useStats, useEffact 가 있다.

    const [product, setProduct] = useState({})

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
        <div>
            <h1>{product.name}</h1>
        </div>
    );
};

export default Detail;