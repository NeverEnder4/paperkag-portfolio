import NavHeader from '../components/nav-header/NavHeader';
import Banner from '../components/banner/Banner';
import ImageDisplay from '../components/image-display/ImageDisplay';
import Bio from '../components/bio/Bio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import InfoWrapper from '../components/info-wrapper/InfoWrapper';
import PageWrapper from '../components/page-wrapper/PageWrapper';

import 'normalize.css';
const modelingImages = [
  { path: '/static/kag-model.jpg' },
  { path: '/static/kag-model-2.jpg' },
];

const pageList = [
  { name: 'art', path: '/art' },
  { name: 'cinema', path: '/cinema' },
  { name: 'modeling', path: '/modeling' },
];

const modeling = ({ currPage }) => {
  return (
    <PageWrapper>
      <NavHeader pageList={pageList} currPage={currPage} />
      <main>
        <div className="content-wrapper">
          <Banner />
          <ImageDisplay
            imagesArray={modelingImages}
            displayName="Photo Shoots"
            description="Capitol Hill"
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

modeling.getInitialProps = ({ pathname }) => {
  return { currPage: pathname };
};

export default modeling;
