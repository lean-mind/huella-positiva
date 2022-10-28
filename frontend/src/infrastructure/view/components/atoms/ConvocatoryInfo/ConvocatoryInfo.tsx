import React from 'react';
import './ConvocatoryInfo.scss';
import { ConvocatoryInfoProps } from './types';

export const ConvocatoryInfo: React.FC<ConvocatoryInfoProps> = ({
  description,
  title,
  imageURL,
}) => (
  <div className="ContentInfoRows">
    <img src={imageURL} alt={title} /> <p>{description}</p>
  </div>
);

ConvocatoryInfo.displayName = 'ConvocatoryInfo';
