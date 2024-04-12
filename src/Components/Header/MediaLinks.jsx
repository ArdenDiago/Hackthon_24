export default function MediaLinks({ link, text }) {
  return (
    <span>
      <a href={link}>{text}</a>
    </span>
  );
}
