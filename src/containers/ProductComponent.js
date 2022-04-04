import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const productEl = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className='col-sm-4' key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card h-100">
                        <div className="row g-0 p-3">
                            <div className="col-md-4">
                                <img src={image} alt={title} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">$ {price}</p>
                                    <p className="card-text"><small className="text-muted">{category}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>{
            Object.keys(products).length === 0 ?
                <div><h2>...Loading</h2></div> :
                productEl
        }
        </>
    )
}

export default ProductComponent