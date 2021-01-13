import React from 'react';

import { FiPlusSquare, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Content, HeadContainer, CategoryContainer } from './styles';

function Category() {
    return (
        <>
            <Content>
                <HeadContainer>
                    <h2>Categorias</h2>
                    <button type="button" onClick={() => {}}>
                        <div className="text">Nova Categoria</div>
                        <div className="icon">
                            <FiPlusSquare size={20} />
                        </div>
                    </button>
                </HeadContainer>
                <CategoryContainer>
                    <table>
                        <thead>
                            <tr />
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hamburguer</td>
                                <td>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => {}}
                                        >
                                            <FiEdit size={18} />
                                        </button>
                                        <button type="button">
                                            <FiTrash2
                                                size={18}
                                                onClick={() => {}}
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CategoryContainer>
            </Content>
        </>
    );
}

export default Category;
