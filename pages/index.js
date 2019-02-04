import HeadTag from '../components/head-tag/HeadTag';
import Header from '../components/header/Header';
import Menu from '../components/menu/Menu';
import Bio from '../components/bio/Bio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import InfoWrapper from '../components/info-wrapper/InfoWrapper';

import 'normalize.css';

const index = () => {
  return (
    <div className="index">
      <HeadTag />
      <Header />
      <Menu />
      <InfoWrapper>
        <Bio />
        <Contact />
        <Footer />
      </InfoWrapper>
    </div>
  );
};

export default index;
