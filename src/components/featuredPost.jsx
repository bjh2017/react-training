const FeaturedPost = (props) => {
  return (
    <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">{props.title}</h1>
        <p className="lead my-3">{props.summary}</p>
        <p className="lead mb-0">
          <a href="#" className="text-white fw-bold">
            Continue reading...
          </a>
        </p>
      </div>
    </div>
  );
};

export default FeaturedPost;
