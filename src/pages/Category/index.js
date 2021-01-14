import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FiPlusSquare, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Content, HeadContainer, CategoryContainer } from './styles';

import { categoriesRequest } from '~/store/modules/category/actions';

function Category() {
    const { categories } = useSelector((state) => state.category);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!categories) {
            dispatch(categoriesRequest());
        }
    }, []);

    return (
        <Content>
            <HeadContainer>
                <h2>Categorias</h2>
                <button type="button" onClick={() => {}}>
                    <div className="text">Nova Categoria</div>
                    <div className="icon">
                        <FiPlusSquare size={24} />
                    </div>
                </button>
            </HeadContainer>
            <CategoryContainer>
                <table>
                    <thead>
                        <tr />
                    </thead>
                    <tbody>
                        {categories &&
                            categories.map((category) => (
                                <tr>
                                    <td>{category.name}</td>
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
                            ))}
                    </tbody>
                </table>
            </CategoryContainer>
        </Content>
    );
}

export default Category;
