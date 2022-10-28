import * as React from 'react';
import './DescriptiveImage.scss';
import { DescriptiveImageProps } from './types';
import { Image } from '../../atoms/Image';

export const DescriptiveImage: React.FC<DescriptiveImageProps> = ({
  title,
  text,
  source,
  description,
  width,
}) => (
  <div className="DescriptiveImage">
    <Image source={source} description={description} width={width} />
    <p className="title">{title}</p>
    <p>{text}</p>
  </div>
);

DescriptiveImage.displayName = 'DescriptiveImage';
