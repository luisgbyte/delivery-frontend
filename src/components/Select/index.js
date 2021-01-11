import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';

import { useField } from '@unform/core';

import { Container } from './styles';

const Select = ({ name, ...rest }) => {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField /* , error */ } = useField(
        name
    );

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }
                    return ref.state.value.map((option) => option.value);
                }
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value.value;
            },
        });
    }, [fieldName, registerField, rest.isMulti]);

    const customStyles = {
        control: (base) => ({
            ...base,
            border: 0,
            boxShadow: 'none',
        }),
        menu: (provided) => ({
            ...provided,
            color: '#b7b7cc',
            fontFamily: 'Ubuntu',
            fontSize: '16px',
            padding: '15px',
        }),
        placeholder: () => ({
            color: '#b7b7cc',
            fontFamily: 'Ubuntu',
            fontSize: '16px',
            paddingLeft: '15px',
        }),
        singleValue: () => ({
            color: '#b7b7cc',
            fontFamily: 'Ubuntu',
            fontSize: '16px',
            paddingLeft: '15px',
        }),
    };
    return (
        <Container>
            <ReactSelect
                styles={customStyles}
                defaultValue={defaultValue}
                ref={selectRef}
                classNamePrefix="react-select"
                {...rest}
            />
        </Container>
    );
};

export default Select;
