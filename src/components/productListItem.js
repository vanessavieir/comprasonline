import React from "react"

export default function Cart(props){
    return (
        <div className='flex m-4 align-items-center justify-content-center'>
                <img src={props.thumbnail}
                    height={150}
                    width={180}
                    alt={props.title}
                    className='border-radius-9 me-3' />
                <h5 className='card-title me-4'>{props.title}</h5>
                <h6 className='mt-1 me-2'>Preço: {`R$ ${props.price}`}</h6>
                <h6 className='mt-2 me-4'>Desconto: {props.discountPercentage}%</h6>
                <h6 className='mt-2 me-4'>Avaliação: {props.rating}</h6>
                    <button className='btn btn-danger ms-3' onClick={props.incrementItem}>+</button> 
                    <span className='ms-3'>Quantidade {props.count}</span>
                    <button className='btn btn-danger ms-3' onClick={props.decrementItem}>-</button>
                    <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remover</button>
        </div>
    )
}