import styles from "@/styles/Paralax.module.css"
const Parallax = () => {
    let bg = this;
    const speed = 0.05;

    let posX = 0, posY = 0;
    let cordX = 0, cordY = 0;
    let divStyle = {};

    const SetMouseParallaxStyle = () => {
        const coefficient = 10;
        const distX = cordX - posX;
        const distY = cordY - posY;

        posX = posX + (distX * speed);
        posY = posY + (distY * speed);

        divStyle = {transform: 'translate(posX / coefficient, posY / coefficient)'};

        // requestAnimationFrame(SetMouseParallaxStyle);
    }

    SetMouseParallaxStyle();

    const MouseMove = (e) => {
        const pWidth = bg.offsetWidth;
        const pHeight = bg.offsetHeight;

        const startCordX = e.pageX - pWidth / 2;
        const startCordY = e.pageY - pHeight / 2;

        cordX = startCordX / pWidth * 100;
        cordY = startCordY / pHeight * 100;
    };

    return (
        <div className={`styles.parallax ${divStyle}`} onMouseMove={MouseMove}>
        </div>
    )
};

export default Parallax;