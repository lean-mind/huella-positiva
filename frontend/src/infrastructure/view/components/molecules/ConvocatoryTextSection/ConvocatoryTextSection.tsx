import * as React from 'react';
import './ConvocatoryTextSection.scss';

interface ConvocatoryTextSectionProps {
  title: string;
  content: string;
}

export const ConvocatoryTextSection: React.FC<ConvocatoryTextSectionProps> = ({title, content}) => (
  <div className="ConvocatoryTextSection">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

ConvocatoryTextSection.displayName = 'ConvocatoryTextSection';
