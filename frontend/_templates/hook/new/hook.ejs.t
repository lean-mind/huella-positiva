---
to: src/infrastructure/hooks/<%= name %>/<%= name %>.ts
---
import React from 'react';

export const <%= name %> = () => {
    const [foo, setFoo] = React.useState('');
    return {foo, setFoo};
}
