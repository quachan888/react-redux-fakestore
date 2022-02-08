import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, title, price, category, image } = product;
    return (
        <MDBCol>
            <Link to={`/product/${id}`}>
                <MDBCard className="h-100 " background="white">
                    <MDBCardImage src={image} alt={title} position="top" class="product-image" />
                    <MDBCardBody>
                        <MDBCardTitle className="product-title text-dark">{title}</MDBCardTitle>
                        <MDBCardText className="text-dark">${price}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <small className="text-muted">{category}</small>
                    </MDBCardFooter>
                </MDBCard>
            </Link>
        </MDBCol>
    );
};

export default ProductCard;
