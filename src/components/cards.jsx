import Card from "./card";

const Cards = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-6">
        <Card
          category="World"
          title="Featured post"
          date="Nov 12"
          summary="This is a wider card with supporting text below as a natural lead-in
          to additional content."
          link="Continue reading"
          classCat="text-primary"
        />
      </div>
      <div className="col-md-6">
        <Card
          category="Design"
          title="Post title"
          date="Nov 11"
          summary="This is a wider card with supporting text below as a natural
          lead-in to additional content."
          link="Continue reading"
          classCat="text-success"
        />
      </div>
    </div>
  );
};

export default Cards;
