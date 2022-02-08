import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedProducts } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    console.log(product, productId);

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => console.log('Error: ', err));
        console.log(response.data);

        dispatch(selectedProducts(response.data));
    };

    useEffect(() => {
        if (productId && productId !== '') fetchProductDetail();
    }, [productId]);

    const { title, image, description, category, price } = product;

    return (
        <div className="container my-4 p-3">
            {Object.keys(product).length === 0 ? (
                <Spinner />
            ) : (
                <div className="row ">
                    <div className="col p-5  text-center">
                        <img src={image} alt={title} style={{ maxHeight: 300 }} />
                    </div>
                    <div className="col py-3 ">
                        <h1>{title}</h1>
                        <h3 className="text-dark mt-3 mb-4">${price}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
