import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

const ImageInput = ({ name, ...rest }) => {
    const inputRef = useRef(null);

    const { fieldName, registerField, /* defaultValue, */ error } = useField(
        name
    );

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'files[0]',
            // clearValue(ref) {
            //     ref.value = '';
            //     // setPreview(null);
            // },
            // setValue(_, value) {
            //     // setPreview(value);
            // },
        });
    }, [fieldName, registerField]);

    return (
        <>
            <Container>
                <input
                    type="file"
                    ref={inputRef}
                    onChange={() => {}}
                    {...rest}
                />
            </Container>
            {error && (
                <p
                    style={{
                        color: '#F1040C',
                        fontSize: '15px',
                        fontFamily: 'Roboto',
                        padding: '5px',
                    }}
                >
                    {error}
                </p>
            )}
        </>
    );
};

export default ImageInput;
