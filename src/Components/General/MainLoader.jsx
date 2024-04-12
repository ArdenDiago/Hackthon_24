// Css
import "../../assets/master.css";

export default function MainLoader(style, t1, t2, imgs, imgData, imgStyle=undefined) {
    return (
        <div className={style} data-wow-duration={t1} data-wow-delay={t2}>
            <h1></h1>
            <img src={imgs} alt={imgData} className={imgStyle}></img>
        </div>
    );
}