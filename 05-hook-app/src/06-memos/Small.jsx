import { memo } from 'react';

export const Small = memo(({value}) => {

    console.log('Me volvi a renderizar')

    return (
        <small>{value}</small>
    )
})
