import NavHeader from '../components/nav-header/NavHeader';
import ImageDisplay from '../components/image-display/ImageDisplay';
import Bio from '../components/bio/Bio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import InfoWrapper from '../components/info-wrapper/InfoWrapper';
import PageWrapper from '../components/page-wrapper/PageWrapper';

import pageList from '../static/seed-data/pages';
import {
  streetArtImages,
  paintingsImages,
  skatingImages,
} from '../static/seed-data/images';

import 'normalize.css';

const art = ({ currPage }) => {
  return (
    <PageWrapper>
      <NavHeader pageList={pageList} currPage={currPage} />
      <main>
        <div className="content-wrapper">
          <ImageDisplay
            imagesArray={streetArtImages}
            displayName="Street Art"
            description="Captiol Hill Seattle"
          />
          <ImageDisplay
            imagesArray={paintingsImages}
            displayName="Paintings"
            description="30x40 (2018)"
          />
          <ImageDisplay
            imagesArray={skatingImages}
            displayName="Skateboarding"
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
          }
        `}</style>
      </InfoWrapper>
    </PageWrapper>
  );
};

art.getInitialProps = ({ pathname }) => {
  return { currPage: pathname };
};

export default art;
