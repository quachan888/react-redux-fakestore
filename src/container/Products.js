import { MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import Spinner from './Spinner';

const Products = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => console.log('Error: ', err));
        // console.log(response.data);
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container my-4 px-2">
            {Object.keys(products).length === 0 ? (
                <Spinner />
            ) : (
                <MDBRow className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </MDBRow>
            )}
        </div>
    );
};

export default Products;
