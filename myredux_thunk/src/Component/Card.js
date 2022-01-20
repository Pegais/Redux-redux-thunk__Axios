import React from 'react'
import store from '../store'
import { useSelector} from "react-redux";
import { setProduct } from '../actions/action';
import axios from 'axios';
import { useEffect } from 'react';
import Product from './Product';

export default function Card() {
    
    // here we used useSelector and got the state argument which points to the reducer being called.
    const product_actionProp = useSelector((state) => {
        console.log(state.prodcutReducer)
        return (
            state.prodcutReducer.map(prop => <Product prop={prop}/>)

        )

    }

        
    )
      


    // async function (thunk function) to fetch data from api
    function Data() {
        return async function (dispatch) {

            let resdata = await axios.get("http://localhost:5000");
            let data = resdata.data.data;
            console.log(data);
            data.map(ele => (

                dispatch(setProduct(ele))
            ))
        };
    }

    useEffect(() => {
        store.dispatch(Data())
    }, [])




    return (
        <>
           {product_actionProp}

        </>
    )
}
