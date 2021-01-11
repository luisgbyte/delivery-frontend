import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

// import api from '~/services/api';

const ImageInput = ({ name, setFileId, ...rest }) => {
    const inputRef = useRef(null);

    const { fieldName, registerField, defaultValue /* , error */ } = useField(
        name
    );
    const [preview, setPreview] = useState(defaultValue);

    const handlePreview = useCallback(async (e) => {
        // verificar se é null
        const data = new FormData();

        data.append('file', e.target.files[0]);

        setFileId(data);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'files[0]',
            clearValue(ref) {
                ref.value = '';
                setPreview(null);
            },
            setValue(_, value) {
                setPreview(value);
            },
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            {preview && <img src={preview} alt="Preview" width="100" />}
            <input
                type="file"
                ref={inputRef}
                onChange={handlePreview}
                {...rest}
            />
        </Container>
    );
};

export default ImageInput;
