import HeadTag from '../components/HeadTag';
import 'tachyons';

const index = () => {
  return (
    <div>
      <HeadTag />
      <h1>paperKAG Portfolio</h1>
      <style jsx>{`
        h1 {
          font-family: 'Baloo Thambi', 'sans-serif';
        }
      `}</style>
    </div>
  );
};

export default index;
