import * as React from 'react';
import './Question.scss';
import QuestionProps from './types';
import {ReactComponent as Arrow} from './keyboard_arrow_down.svg';


export const Question: React.FC<QuestionProps> = ({title, body}) => {
  const [active, toggleActive] = React.useState(false);
  const ContentPane = React.createRef<HTMLDivElement>();
  const toggleDisplay = () => {
    if (ContentPane.current) {
      ContentPane.current.style.maxHeight = active ? '0rem' : '10rem';
      toggleActive(!active);
    }
  };

  return (<div className="Question">
  <div className="Title" onClick = {toggleDisplay}>
    <Arrow/>
    <h2>{title}</h2>
  </div>
  <div className="Content" ref={ContentPane}>
    {body}
  </div>
</div>);
};



Question.displayName = 'Question';
