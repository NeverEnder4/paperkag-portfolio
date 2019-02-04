const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
      <style jsx>{`
        .page-wrapper {
          width: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PageWrapper;
