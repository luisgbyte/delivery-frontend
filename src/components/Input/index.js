import React, { useEffect, useRef, useState, useCallback } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

function Input({ name, icon: Icon, ...rest }) {
    const inputRef = useRef(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const { fieldName, defaultValue, registerField, error } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <>
            <Container isFilled={isFilled} isFocused={isFocused}>
                {Icon && <Icon size={20} />}
                <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    defaultValue={defaultValue}
                    ref={inputRef}
                    {...rest}
                />
            </Container>
            {error && (
                <p
                    style={{
                        color: '#F1040C',
                        fontSize: '1.5rem',
                        fontFamily: 'Roboto',
                        padding: '5px',
                    }}
                >
                    {error}
                </p>
            )}
        </>
    );
}

export default Input;
