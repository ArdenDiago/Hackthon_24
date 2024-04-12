import "../../assets/master.css";

export default function Divide({link, style, content, altText}) {
  return (
    <a href={link} className={style}>
      <img src={content} alt={altText}></img>
    </a>
  );
}
