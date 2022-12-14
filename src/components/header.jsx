const Header = (props) => {
  return (
    <header className="blog-header lh-1 py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-2 pt-1">
          <a className="link-secondary" href="#">
            Subscribe
          </a>
        </div>
        <div className="col-2 pt-1">
          {props.itemsCount > 0 && (
            <h1>
              <span className="badge bg-secondary m-3">{props.itemsCount}</span>
            </h1>
          )}
        </div>
        {/* <div className="col-4 text-center">
          <a className="blog-header-logo text-dark" href="#">
            Large
          </a>
        </div> */}
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a className="link-secondary" href="#" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mx-3"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Search</title>
              <circle cx="10.5" cy="10.5" r="7.5" />
              <path d="M21 21l-5.2-5.2" />
            </svg>
          </a>
          <a className="btn btn-sm btn-outline-secondary" href="#">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
