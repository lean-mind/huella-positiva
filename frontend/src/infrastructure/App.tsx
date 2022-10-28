import React, { useContext } from "react";
import "./styles/scss/index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./view/pages/Home/Home";
import { ROUTE } from "./http/routes";
import { EmailConfirmation } from "./view/pages/EmailConfirmation";
import { WrapperPages } from "./view/components/templates/WrapperPages";
import { Header } from "./view/components/organisms/Header";
import { Footer } from "./view/components/organisms/Footer";
import { LoginRegister } from "./view/pages/User/LoginRegister";
import { ConvocatoryDetails } from "./view/pages/Convocations/ConvocatoryDetails";
import { ConvocatoryList } from "./view/pages/Convocations/ConvocatoryList";
import { ConvocatoryRegister } from "./view/pages/Convocations/ConvocatoryRegister";
import { ConvocatoryVolunteers } from "./view/pages/Convocations/ConvocatoryVolunteers";
import { Context } from "./Context";
import { FrequentlyAskedQuestions } from "./view/pages/FrequentlyAskedQuestions";
import { Esal } from "./view/pages/Esal";
import { CookiesPolicy } from "./view/pages/CookiesPolicy";
import { LegalAdvice } from "./view/pages/LegalAdvice";
import { ModifyUser } from "./view/pages/User/ModifyUser";
import { PrivacyPolicy } from "./view/pages/PrivacyPolicy";
import { Contact } from "./view/pages/Contact/Contact";

const App: React.FC = () => {
  const { isAuth } = useContext(Context);

  return (
    <Router>
      <div className="App">
        <WrapperPages>
          <Header />
          <Routes>
            <Route path={ROUTE.proposals.list} loader={ConvocatoryList} />
            <Route path={ROUTE.proposals.details} loader={ConvocatoryDetails} />
            <Route path={ROUTE.proposals.register} loader={ConvocatoryRegister} />
            <Route path={ROUTE.proposals.volunteers(':id')} loader={ConvocatoryVolunteers} />
            <Route path={ROUTE.home} loader={Home} />
            <Route path={ROUTE.loginRegister} loader={LoginRegister} />
            <Route path={ROUTE.faq} loader={FrequentlyAskedQuestions} />
            <Route path={ROUTE.organizations.register} loader={Esal} />
            <Route path={ROUTE.cookiesPolicy} loader={CookiesPolicy} />
            <Route path={ROUTE.legalAdvice} loader={LegalAdvice} />
            <Route path={ROUTE.email.confirmation} loader={EmailConfirmation} />
            <Route path={ROUTE.volunteers.profile} loader={ModifyUser} />
            <Route path={ROUTE.privacyPolicy} loader={PrivacyPolicy} />
            <Route path={ROUTE.contact} loader={Contact} />
            {/*TODO: Resolve the problems with redirect component, to avoid showing blank page*/}
            {/*{!isAuth && <Redirect from={ROUTE.home} to={ROUTE.loginRegister} />}*/}
            {/*{isAuth && <Redirect from={ROUTE.loginRegister} to={ROUTE.home} />}*/}
          </Routes>
          <Footer />
        </WrapperPages>
      </div>
    </Router>
  );
};

export default App;
