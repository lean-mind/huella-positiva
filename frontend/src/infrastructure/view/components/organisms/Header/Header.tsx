import * as React from 'react';
import { useContext, useState } from 'react';
import './Header.scss';
import { Image } from '../../atoms/Image';
import { NavBarDesktop } from '../../molecules/NavBarDesktop';
import { Context } from '../../../../Context';
import { HamburguerMenu } from '../../molecules/HamburguerMenu';
import useWindowSize from '../../../../hooks/useWindowSize';

export const Header: React.FC<{}> = () => {
  const [showModal, setShowModal] = useState(false);

  const auth = useContext(Context);

  const size = useWindowSize();

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="Header">
      <Image
        source="https://huellapositiva.com/wp-content/uploads/2020/03/cropped-Logo-Huella-Positiva-PV-05.png"
        description="logo"
      />
      {
        // @ts-ignore
        size.width < 992
          // @ts-ignore
          ? <NavBarDesktop isAuth={auth.isAuth} show={showModal} role={auth.role} onClick={handleModal} onClickDisconnect={auth.removeAuth} />
          // @ts-ignore
          : <NavBarDesktop isAuth={auth.isAuth} show={showModal} role={auth.role} onClickDisconnect={auth.removeAuth} />
      }
      <HamburguerMenu onClick={handleModal} show={showModal} />
    </div>
  );
};

Header.displayName = 'Header';
