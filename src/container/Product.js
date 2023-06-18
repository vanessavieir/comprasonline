import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductList } from '../data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';


export default function Product() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const props = ProductList.find(
        (element) => element.id === parseInt(params.id)
    );

    const list = useSelector ((state) => state.cart.list)
    const [alert, setalert] = useState(false);
    const element = list.find((item) => item.id === props.id)

    const addToCart = () => {
        setalert(true);
        setTimeout(()=> setalert(false, 3000))
        dispatch(addItem(props))
    };

    return (
        <div className='card m-2'>
            {alert && <span className="alert alert-success">Itens adicionado ao carrinho</span>}
            <div className='mt-2'>
                <img src={props.thumbnail}
                    height={350}
                    width={400}
                    alt={props.title}
                    className='border-radius-9' />
            </div>
            <div className='mt-3 card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <h6 className='mt-2'>Preço: {`R$ ${props.price}`}</h6>
                <h6 className='mt-2'>Desconto: {props.discountPercentage}%</h6>
                <h6 className='mt-2'>Avaliação: {props.rating}</h6>
                <div>
                    {props.stock > 0 ? (
                        <>
                            {element?.count > 0 ? (
                            <button className='ms-4 btn btn-outline-warning' onClick={() => navigate('/cart')}>
                                Ir para o carrinho
                            </button> 
                            ) : (
                            <button className='ms-4 btn btn-success' onClick={addToCart}>
                                Adicione ao carrinho
                            </button>
                            )}
                        </>
                            ) : (
                            <button className='btn btn-outline-danger'>Fora de estoque</button>
                    )}
                </div>
            </div>
        </div>
    );
}