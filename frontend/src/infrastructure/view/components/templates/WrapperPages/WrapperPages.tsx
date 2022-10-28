import * as React from "react";
import "./WrapperPages.scss";

type Props = {
  children: JSX.Element[],
};

export const WrapperPages: React.FC<Props> = ({children}) => (
  <div className="WrapperPages">
    {children}
  </div>
);

WrapperPages.displayName = 'WrapperPages';
