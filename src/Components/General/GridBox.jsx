export default function GridBox({eventName, typeOfEvent, date, image}) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog__item-right ">
        <a href="blog-single.html" className="image d-block">
          <img
            className="radius-10"
            src={image}
            alt="image"
          ></img>
          <h3>{eventName}</h3>
        </a>
        <div className="d-flex align-items-center justify-content-between">
          <span className="blog__tag">{typeOfEvent}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
