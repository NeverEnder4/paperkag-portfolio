const InfoWrapper = ({ children }) => {
  return (
    <div className="info-wrapper">
      {children}
      <style jsx>{`
        .info-wrapper {
          background-color: #1d1d1d;
          color: rgba(250, 250, 250, 0.8);
        }
      `}</style>
    </div>
  );
};

export default InfoWrapper;
