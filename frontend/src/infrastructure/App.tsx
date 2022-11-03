import React, { useContext } from 'react';
import './styles/scss/index.scss';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './view/pages/Home/Home';
import { ROUTE } from './http/routes';
import { EmailConfirmation } from './view/pages/EmailConfirmation';
import { WrapperPages } from './view/components/templates/WrapperPages';
import { Header } from './view/components/organisms/Header';
import { Footer } from './view/components/organisms/Footer';
import { LoginRegister } from './view/pages/User/LoginRegister';
import { ConvocatoryDetails } from './view/pages/Convocations/ConvocatoryDetails';
import { ConvocatoryList } from './view/pages/Convocations/ConvocatoryList';
import { ConvocatoryRegister } from './view/pages/Convocations/ConvocatoryRegister';
import { ConvocatoryVolunteers } from './view/pages/Convocations/ConvocatoryVolunteers';
import { Context } from './Context';
import { FrequentlyAskedQuestions } from './view/pages/FrequentlyAskedQuestions';
import { Esal } from './view/pages/Esal';
import { CookiesPolicy } from './view/pages/CookiesPolicy';
import { LegalAdvice } from './view/pages/LegalAdvice';
import { ModifyUser } from './view/pages/User/ModifyUser';
import { PrivacyPolicy } from './view/pages/PrivacyPolicy';
import { Contact } from './view/pages/Contact/Contact';

const App: React.FC = () => {
  const { isAuth } = useContext(Context);

  return (
    <Router>
      <div className="App">
        <WrapperPages>
          <Header />
          <Routes>
            <Route path={ROUTE.proposals.list} element={<ConvocatoryList />} />
            <Route path={ROUTE.proposals.details} element={<ConvocatoryDetails />} />
            <Route path={ROUTE.proposals.register} element={<ConvocatoryRegister />} />
            <Route
              path={ROUTE.proposals.volunteers(':id')}
              element={<ConvocatoryVolunteers />}
            />
            <Route
              path={ROUTE.home}
              element={!isAuth ? <Navigate to={ROUTE.loginRegister} /> : <Home />}
            />
            <Route path={ROUTE.loginRegister} element={<LoginRegister />} />
            <Route path={ROUTE.faq} element={<FrequentlyAskedQuestions />} />
            <Route path={ROUTE.organizations.register} element={<Esal />} />
            <Route path={ROUTE.cookiesPolicy} element={<CookiesPolicy />} />
            <Route path={ROUTE.legalAdvice} element={<LegalAdvice />} />
            <Route path={ROUTE.email.confirmation} element={<EmailConfirmation />} />
            <Route path={ROUTE.volunteers.profile} element={<ModifyUser />} />
            <Route path={ROUTE.privacyPolicy} element={<PrivacyPolicy />} />
            <Route path={ROUTE.contact} element={<Contact />} />
          </Routes>
          <Footer />
        </WrapperPages>
      </div>
    </Router>
  );
};

export default App;
