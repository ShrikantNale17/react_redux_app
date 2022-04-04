import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const { id, title, image, price, category, description } = product;

    const { productId } = useParams();

    useEffect(() => {
        fetchProduct();

        return (() => {
            dispatch(removeSelectedProduct());
        })
    }, [productId])

    const fetchProduct = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log('Err ', err));
        dispatch(selectedProduct(response.data));
    }
    return (
        <>
            {Object.keys(product).length === 0 ?
                <div className='container'>
                    <h3>...Loading</h3>
                </div>
                :
                <div className='container'>
                    <div className="card m-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0 p-3">
                            <div className="col-md-4">
                                <img src={image} alt={title} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">$ {price}</p>
                                    <p className="card-text"><small className="text-muted">{category}</small></p>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetail



{/* <div className='four column wide' key={id}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                <div className='meta price'>$ {price}</div>
                                <div className='meta'>{category}</div>
                            </div>
                        </div>
                    </div>
                </div> */}