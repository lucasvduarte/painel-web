import React from 'react';
import Button from '@material-ui/core/Button';
import { Props } from './interface/Button';

export default function ButtonComponent({ title, type, size, disabled, onClick }: Props) {

    return (
        <Button type={type || 'submit'} size={size || 'small'} variant="contained" color="primary" onClick={onClick} disabled={disabled || false}>
            {title}
        </Button>
    );
}
