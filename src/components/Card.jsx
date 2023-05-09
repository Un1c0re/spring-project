

const Card = ({img, text, data}) => {
    return (
        <>
            <div className="w-100 h-25 bg-danger">
                <img src={img}  alt="event photo"/>
                <p>{text}</p>
                <p>{data}</p>
            </div>
        </>
    );
}

export default Card;