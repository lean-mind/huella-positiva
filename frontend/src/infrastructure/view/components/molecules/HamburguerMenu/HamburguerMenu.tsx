import * as React from 'react';
import './HamburguerMenu.scss';
import { NabBarMobilProps } from './types';

export const HamburguerMenu: React.FC<NabBarMobilProps> = ({onClick, show}) => (
    <div className="HamburguerMenu">
        {
            !show ?
            <div className={'container'} onClick={onClick}>
                <span/>
                <span/>
                <span/>
            </div>:
                <div className={'CloseModal'} onClick={onClick}>X</div>
        }
    </div>
);

HamburguerMenu.displayName = 'HamburguerMenu';
