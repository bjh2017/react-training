import Article from "./article";
import Sidebar from "./sidebar";

const BlogBody = () => {
  return (
    <div className="row g-5">
      <div className="col-md-8">
        <Article />
      </div>
      <div className="col-md-4">
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogBody;
