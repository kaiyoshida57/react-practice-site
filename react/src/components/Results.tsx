const Results = ({ photo }: any) => {
  return (
    <div className="photo-list mt-8 mb-16 grid grid-cols-4 gap-8">
      {photo.map((singleData: any, index: number) => (
        <a href={singleData.links.html} key={index}>
          <img src={singleData.urls.regular} alt={singleData.alt_description} />
        </a>
      ))}
    </div>
  );
};

export default Results;
