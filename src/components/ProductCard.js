import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
        const navigate = useNavigate();
    return (
        <div className='card m-2 cursor-pointer' style={{width: 300}} role="button" onClick={() => navigate(`/product/${props.id}`)}>
            <div className='mt-2'>
                <img src={props.thumbnail}
                    height={150}
                    width={180}
                    alt={props.title}
                    className='border-radius-9' />
            </div>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <h6 className='mt-1'>Preço: {`R$ ${props.price}`}</h6>
                <h6 className='mt-1'>Desconto: {props.discountPercentage}%</h6>
                <h6 className='mt-1'>Avaliação: {props.rating}</h6>
                <div className='mt-1'>
                    {props.stock > 0 ? <button className='btn btn-success'>Disponível</button> : <button className='btn btn-outline-danger'>Fora de estoque</button>}
                </div>
            </div>
        </div>
    )
}