import HeadTag from '../components/nav-header/head-tag/HeadTag';
import Header from '../components/nav-header/header/Header';
import Menu from '../components/menu/Menu';
import Bio from '../components/bio/Bio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import InfoWrapper from '../components/info-wrapper/InfoWrapper';
import PageWrapper from '../components/page-wrapper/PageWrapper';

import 'normalize.css';

const index = () => {
  return (
    <PageWrapper>
      <div className="index">
        <HeadTag />
        <div className="header-position">
          <Header />
        </div>
        <Menu />
        <InfoWrapper>
          <Bio />
          <Contact />
          <Footer />
        </InfoWrapper>
      </div>

      <style jsx global>{`
        body {
          background-color: #ffffff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </PageWrapper>
  );
};

export default index;
