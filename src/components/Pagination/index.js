import React from 'react';

import { Container } from './styles';

function Pagination({ limit, total, page, setPage }) {
    const current = page;
    const pages = Math.ceil(total / limit);

    function onPageChange(item) {
        setPage(item);
    }
    console.log(page);
    return (
        <Container>
            <ul>
                <li>
                    <button
                        type="button"
                        disabled={current === 1}
                        onClick={() => onPageChange(current - 1)}
                    >
                        Anterior
                    </button>
                </li>
                {Array.from({ length: pages })
                    .map((_, index) => index + 1)
                    .map((item) => (
                        <li key={item}>
                            <button
                                type="button"
                                className={
                                    item === current
                                        ? 'pagination__item--ative'
                                        : null
                                }
                                onClick={() => onPageChange(item)}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                <li>
                    <button
                        type="button"
                        disabled={current === pages}
                        onClick={() => onPageChange(current + 1)}
                    >
                        Próximo
                    </button>
                </li>
            </ul>
        </Container>
    );
}

export default Pagination;
