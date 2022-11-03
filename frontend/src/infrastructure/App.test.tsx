import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './Context';

it('renders without crashing', () => {
    const root = ReactDOM.createRoot(document.createElement('div'))
    root.render(<Provider><App/></Provider>);
    root.unmount()
});
