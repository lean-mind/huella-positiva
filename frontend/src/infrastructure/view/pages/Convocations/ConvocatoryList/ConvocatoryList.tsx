import * as React from 'react';
import { useState } from 'react';
import './ConvocatoryList.scss';
import { ConvocatoryCard } from '../../../components/organisms/ConvocatoryCard';
import exampleConvocatoryList from './exampleConvocatoryList.json';
import { ConvocatoryCardProps } from '../../../components/organisms/ConvocatoryCard/types';
import ConvocatoriesFetch from '../../../../repositories/convocatories';

export const ConvocatoryList: React.FC<{}> = () => {
  const [page, changePage] = useState(1);
  const [convocatories, setConvocatories] = useState([]);
  const convocatoriesFetcher = new ConvocatoriesFetch();

  React.useEffect(() => {
    /*convocatoriesFetcher.getConvocatoriesPage(page,8).then(
      (result) => {
        setConvocatories(result.proposals);
      }
    );*/
  }, [page]);

  const nextPage = () => {
    changePage(page + 1);
  };
  const prevPage = () => {
    // tslint:disable-next-line: no-unused-expression
    page > 1 && changePage(page - 1);
  };

  return (
    <div className="ConvocatoryList">
      <h2 className="Title">Convocatorias</h2>
      {/* Change exampleConvocatoryList for convocatories for backend integration*/}
      {exampleConvocatoryList.map((convocatory: ConvocatoryCardProps, index) => (
        <ConvocatoryCard
          key={index}
          title={convocatory.title}
          description={convocatory.description}
          photo={convocatory.photo}
          city={convocatory.city}
          localization={convocatory.localization}
          agesRange={convocatory.agesRange}
          startDay={convocatory.startDay}
          finishDay={convocatory.finishDay}
        />
      ))}
      <div className={'pageNav'}>
        <button onClick={() => prevPage()} className="navigation-button">
          Anterior
        </button>
        <p>1 - 2- 3 - 5 .... 30</p>
        <button onClick={() => nextPage()} className="navigation-button">
          Siguiente
        </button>
      </div>
    </div>
  );
};

ConvocatoryList.displayName = 'ConvocatoryList';
