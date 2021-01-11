import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container } from './styles';

function CardProduct({ product, handleDelete, handleEdit }) {
    const [isAvailable, setIsAvailable] = useState(true);

    async function toggleAvailable() {
        setIsAvailable(!isAvailable);
    }

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
                    R$ <b>{product.price}</b>
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
                            onChange={toggleAvailable}
                        />
                        <span className="slider" />
                    </label>
                </div>
            </section>
        </Container>
    );
}

export default CardProduct;
