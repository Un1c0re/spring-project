import {useState} from "react";
import styles from "@/styles/CreateEvent.module.css"
import axios from "axios";
import {useDropzone} from "react-dropzone";

const CreateEvent = ({active, setActive}) => {
    const [image, setImage] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const uploadEvent = async (e) => {
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);


        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        const imageData = image.split(',')[1];
        const imageBuffer = Buffer.from(imageData, 'base64');
        const data = {photo: imageBuffer, eventData: formJson};

        try {
            const response = await axios.post("/api/uploadEvent", data);
            // setMsg({msg: data.data.status});
            setActive(false);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className={active? `${styles.bg} ${styles.active}` : styles.bg}>
            <form className={styles.createForm} onSubmit={uploadEvent}>
                <div className="form-floating w-100">
                    <input name="event_name" type="text" id="eventName" className="form-control"/>
                    <label className="text-white" htmlFor="eventName">Введите название мероприятия</label>
                </div>

                <div className="form-floating w-100">
                    <input name="event_description" type="text" id="description" className="form-control"/>
                    <label className="text-white" htmlFor="description">Добавьте описание мероприятия</label>
                </div>

                <div className="form-floating w-100">
                    <input name="event_datetime" type="datetime-local" id="datetime" className="form-control"/>
                    <label className="text-white" htmlFor="datetime">Когда будет мероприятие?</label>
                </div>

                <div className="form-floating w-100">
                    <input name="event_place" type="text" id="place" className="form-control"/>
                    <label className="text-white" htmlFor="place">Где будет проходить мероприятие?</label>
                </div>

                {image ? (
                    <div className="d-flex flex-column align-items-center justify-content-around h-50 w-100" {...getRootProps()}>
                        <input {...getInputProps()}/>
                        <img className="h-75 align-self-center" src={image} alt="Загруженное изображение" />
                        <p className="text-white fw-bold">Нажмите чтобы выбрать другое изображение</p>
                    </div>
                ) : (
                    <div className={`${styles.dropZone}`} onClick={e => e.stopPropagation()} {...getRootProps()}>
                        <input {...getInputProps()}/>
                        <p>Перетащите фотографию сюда</p>
                        <p>или нажмите, чтобы выбрать файл</p>
                    </div>
                )}

                <div className="d-flex flex-row justify-content-around">
                    <button  type="submit" className={styles.btnGreen}>Подтвердить</button>
                    <button  type="reset"
                             className={styles.btnRed}
                             onClick={() => {
                                 setActive(false);
                                 setImage(null)
                             }}
                    >Отменить</button>
                </div>
            </form>
        </div>
    )
}

export default CreateEvent;