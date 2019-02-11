import NavHeader from '../components/nav-header/NavHeader';
import ImageDisplay from '../components/image-display/ImageDisplay';
import Modal from '../components/modal/Modal';
import Bio from '../components/bio/Bio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import InfoWrapper from '../components/info-wrapper/InfoWrapper';
import PageWrapper from '../components/page-wrapper/PageWrapper';

import pageList from '../static/seed-data/pages';
import { streetArtImages, paintingsImages } from '../static/seed-data/images';

import 'normalize.css';

class art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      modal: {
        src: '',
        alt: '',
      },
    };
  }

  static getInitialProps({ pathName }) {
    return { currPage: pathName };
  }

  onImgClickHandler = e => {
    console.log('clicked');
    e.persist();
    this.setState((prevState, props) => ({
      displayModal: true,
      modal: {
        src: e.target.src,
        alt: e.target.alt,
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
            <ImageDisplay
              onImgClick={this.onImgClickHandler}
              imagesArray={streetArtImages}
              displayName="Street Art"
              description="Captiol Hill Seattle"
            />
            <ImageDisplay
              onImgClick={this.onImgClickHandler}
              imagesArray={paintingsImages}
              displayName="Paintings"
              description="30x40 (2018)"
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
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
              overflow-y: ${bodyOverflow};
              overflow-x: hidden;
              margin-right: calc(-1 * (100vw - 100%));
            }
          `}</style>
        </InfoWrapper>
      </PageWrapper>
    );
  }
}

export default art;
