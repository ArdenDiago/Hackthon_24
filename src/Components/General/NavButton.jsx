export default function NavButton({link, text}) {
    return (
        <li>
            <a href={link}>{text}</a>
        </li>
    );
}