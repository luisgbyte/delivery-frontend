import React from 'react';
import { useDispatch } from 'react-redux';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container } from './styles';

import { productStocked } from '~/store/modules/product/actions';

function CardProduct({ product, handleDelete, handleEdit }) {
    const dispatch = useDispatch();

    async function toggleAvailable(id) {
        dispatch(productStocked(id));
    }

    const isAvailable = product.stocked;

    return (
        <Container available={isAvailable}>
            <header>
                <img
                    width="100%"
                    src={product.file ? product.file.url : null}
                    alt={product.name}
                />
            </header>
            <section className="body">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="price">
                    <b>
                        {product.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}
                    </b>
                </p>
            </section>
            <section className="footer">
                <div className="icon-container">
                    <button
                        type="button"
                        className="icon"
                        onClick={() => handleEdit(product)}
                    >
                        <FiEdit3 size={20} />
                    </button>

                    <button
                        type="button"
                        className="icon"
                        onClick={() => handleDelete(product.id)}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>

                <div className="availability-container">
                    <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

                    <label
                        htmlFor={`available-switch-${product.id}`}
                        className="switch"
                    >
                        <input
                            id={`available-switch-${product.id}`}
                            type="checkbox"
                            checked={isAvailable}
                            onChange={() => toggleAvailable(product.id)}
                        />
                        <span className="slider" />
                    </label>
                </div>
            </section>
        </Container>
    );
}

export default CardProduct;
