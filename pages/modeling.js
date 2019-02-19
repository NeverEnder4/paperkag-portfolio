import NavHeader from '../components/nav-header/NavHeader';
import Banner from '../components/banner/Banner';
import Modal from '../components/modal/Modal';
import ImageDisplay from '../components/image-display/ImageDisplay';
import Bio from '../components/bio/Bio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import InfoWrapper from '../components/info-wrapper/InfoWrapper';
import PageWrapper from '../components/page-wrapper/PageWrapper';

import pageList from '../static/seed-data/pages';
import { modelingImages, skatingImages } from '../static/seed-data/images';
import registerServiceWorker from '../static/utils/serviceWorkerUtils';
import {
  initGA,
  logEvent,
  extractFileNameFromUrl,
} from '../static/utils/analytics';

const analyzeImageClick = e => {
  const remove = 'https://apettigrew.imgix.net/static/';
  const fileName = extractFileNameFromUrl(
    e.currentTarget.dataset['url'],
    remove,
  );
  logEvent(
    `Image Display on ${window.location.pathname}`,
    'Image Click',
    fileName,
    1,
  );
};

import 'normalize.css';

const defaultState = {
  displayModal: false,
  modal: {
    src: '',
    alt: '',
  },
};

class modeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...defaultState };
  }

  static getInitialProps({ pathname }) {
    return { currPage: pathname };
  }

  componentDidMount() {
    registerServiceWorker();
    initGA();
  }

  onImgClickHandler = e => {
    e.persist();
    analyzeImageClick(e);
    this.setState((prevState, props) => ({
      displayModal: true,
      modal: {
        src: e.target.dataset.imgsrc,
        alt: e.target.dataset.imgalt,
      },
    }));
  };

  onModalClickHandler = e => {
    if (!e.target.className.includes('modal-img')) {
      this.setState((prevState, props) => ({ displayModal: false }));
    }
  };

  render() {
    const { modal, displayModal } = this.state;
    const { currPage } = this.props;
    const bodyOverflow = displayModal ? 'hidden' : 'initial';
    return (
      <PageWrapper>
        <Modal
          displayed={displayModal}
          onModalClick={this.onModalClickHandler}
          imgSrc={modal.src}
          imgAlt={modal.alt}
        />
        <NavHeader pageList={pageList} currPage={currPage} />
        <main>
          <div className="content-wrapper">
            <Banner />
            <ImageDisplay
              onImgClick={this.onImgClickHandler}
              imagesArray={modelingImages}
              displayName="Photo Shoots"
              description="Capitol Hill"
            />
            <ImageDisplay
              onImgClick={this.onImgClickHandler}
              imagesArray={skatingImages}
              displayName="Skateboarding"
              description="Seattle"
            />
          </div>
        </main>
        <InfoWrapper>
          <Bio />
          <Contact />
          <Footer />
          <style jsx>{`
            .content-wrapper {
              padding: 0 10px 2rem 10px;
            }
          `}</style>
          <style jsx global>{`
            body {
              background-color: #ffffff;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='1600' viewBox='0 0 50 4000'%3E%3Cg fill='%231d1d1d'%3E%3Ccircle cx='50' cy='2750' r='35'/%3E%3Ccircle cx='50' cy='2700' r='34'/%3E%3Ccircle cx='50' cy='2650' r='33'/%3E%3Ccircle cx='50' cy='2600' r='32'/%3E%3Ccircle cx='50' cy='2550' r='31'/%3E%3Ccircle cx='50' cy='2500' r='30'/%3E%3Ccircle cx='50' cy='2450' r='29'/%3E%3Ccircle cx='50' cy='2400' r='28'/%3E%3Ccircle cx='50' cy='2350' r='27'/%3E%3Ccircle cx='50' cy='2300' r='26'/%3E%3Ccircle cx='50' cy='2250' r='25'/%3E%3Ccircle cx='50' cy='2200' r='24'/%3E%3Ccircle cx='50' cy='2150' r='23'/%3E%3Ccircle cx='50' cy='2100' r='22'/%3E%3Ccircle cx='50' cy='2050' r='21'/%3E%3Ccircle cx='50' cy='2000' r='20'/%3E%3Ccircle cx='50' cy='1950' r='19'/%3E%3Ccircle cx='50' cy='1900' r='18'/%3E%3Ccircle cx='50' cy='1850' r='17'/%3E%3Ccircle cx='50' cy='1800' r='16'/%3E%3Ccircle cx='50' cy='1750' r='15'/%3E%3Ccircle cx='50' cy='1700' r='14'/%3E%3Ccircle cx='50' cy='1650' r='13'/%3E%3Ccircle cx='50' cy='1600' r='12'/%3E%3Ccircle cx='50' cy='1550' r='11'/%3E%3Ccircle cx='50' cy='1500' r='10'/%3E%3Ccircle cx='50' cy='1450' r='9'/%3E%3Ccircle cx='50' cy='1400' r='8'/%3E%3Ccircle cx='50' cy='1350' r='7'/%3E%3Ccircle cx='50' cy='1300' r='6'/%3E%3Ccircle cx='50' cy='1250' r='5'/%3E%3Ccircle cx='50' cy='1200' r='4'/%3E%3Ccircle cx='50' cy='1150' r='3'/%3E%3Ccircle cx='50' cy='1100' r='2'/%3E%3Ccircle cx='50' cy='1050' r='1'/%3E%3Ccircle cx='0' cy='2750' r='35'/%3E%3Ccircle cx='0' cy='2700' r='34'/%3E%3Ccircle cx='0' cy='2650' r='33'/%3E%3Ccircle cx='0' cy='2600' r='32'/%3E%3Ccircle cx='0' cy='2550' r='31'/%3E%3Ccircle cx='0' cy='2500' r='30'/%3E%3Ccircle cx='0' cy='2450' r='29'/%3E%3Ccircle cx='0' cy='2400' r='28'/%3E%3Ccircle cx='0' cy='2350' r='27'/%3E%3Ccircle cx='0' cy='2300' r='26'/%3E%3Ccircle cx='0' cy='2250' r='25'/%3E%3Ccircle cx='0' cy='2200' r='24'/%3E%3Ccircle cx='0' cy='2150' r='23'/%3E%3Ccircle cx='0' cy='2100' r='22'/%3E%3Ccircle cx='0' cy='2050' r='21'/%3E%3Ccircle cx='0' cy='2000' r='20'/%3E%3Ccircle cx='0' cy='1950' r='19'/%3E%3Ccircle cx='0' cy='1900' r='18'/%3E%3Ccircle cx='0' cy='1850' r='17'/%3E%3Ccircle cx='0' cy='1800' r='16'/%3E%3Ccircle cx='0' cy='1750' r='15'/%3E%3Ccircle cx='0' cy='1700' r='14'/%3E%3Ccircle cx='0' cy='1650' r='13'/%3E%3Ccircle cx='0' cy='1600' r='12'/%3E%3Ccircle cx='0' cy='1550' r='11'/%3E%3Ccircle cx='0' cy='1500' r='10'/%3E%3Ccircle cx='0' cy='1450' r='9'/%3E%3Ccircle cx='0' cy='1400' r='8'/%3E%3Ccircle cx='0' cy='1350' r='7'/%3E%3Ccircle cx='0' cy='1300' r='6'/%3E%3Ccircle cx='0' cy='1250' r='5'/%3E%3Ccircle cx='0' cy='1200' r='4'/%3E%3Ccircle cx='0' cy='1150' r='3'/%3E%3Ccircle cx='0' cy='1100' r='2'/%3E%3Ccircle cx='0' cy='1050' r='1'/%3E%3Crect x='-10' y='2750' width='70' height='1250'/%3E%3C/g%3E%3C/svg%3E");
              background-attachment: static;
              background-size: 20px;
              background-position: 0% 120%;
              background-repeat: repeat-x;
              overflow-y: ${bodyOverflow};
              overflow-x: hidden;
              margin-right: calc(-1 * (100vw - 100%));
            }
            @media (min-width: 500px) {
              body {
                background-position: 0% 112%;
              }
            }

            @media (min-width: 700px) {
              body {
                background-position: 0% 105%;
              }
            }

            @media (min-width: 1025px) {
              body {
                background-position: 0% 100%;
              }
            }
          `}</style>
        </InfoWrapper>
      </PageWrapper>
    );
  }
}

export default modeling;
