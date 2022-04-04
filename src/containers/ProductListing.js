import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const product = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(product);

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("Err", err)
            });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="container mt-3">
            <div className="row row-cols-3 gy-3">
                <ProductComponent />
            </div>
        </div>
    );
};

export default ProductListing;
