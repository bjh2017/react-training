import BlogBody from "./blogBody";
import Cards from "./cards";
import Cart from "./cart";
import FeaturedPost from "./featuredPost";

const Main = () => {
  const summary =
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.";
  const title = "Title of a longer featured blog post";
  return (
    <main className="container">
      {/* <FeaturedPost title={title} summary={summary} />
      <Cards />
      <BlogBody /> */}
    </main>
  );
};

export default Main;
