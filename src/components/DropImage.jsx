"use client"
import { useDropzone } from 'react-dropzone';
import styles from "@/styles/DropImage.module.css"
import {useState} from "react";
import axios from "axios";

const DropImage = ({active, setActive, userData}) => {
    const [image, setImage] = useState(null);
    const [msg, setMsg]     = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const uploadSubmit = async (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        const imageData = image.split(',')[1];
        const imageBuffer = Buffer.from(imageData, 'base64');
        const data = {photo: imageBuffer, userData: userData}

        try {
            const response = await axios.post("/api/setUserPhoto", data);
            setMsg({msg: response.data.status});
            setActive(false);
            window.location.reload();
        } catch (e) {
            setMsg({err: e.response.data.status});
            console.log(msg);
        }
    }

    const uploadCancel = async (e) => {
        setImage(null);
        setActive(false)
    }

    return (
        <div className={ active ? `${styles.bg} ${styles.active}` : styles.bg}>
            {image ? (
                <div className={styles.uploadWindow} onClick={e => e.stopPropagation()}>
                    <div className={styles.content}>
                        <img src={image} alt="Загруженное изображение" />
                        <div className="w-100 d-flex flex-row justify-content-between">
                            <button className={styles.cancelBtn} onClick={e => uploadCancel(e)}>Отменить</button>
                            <button className={styles.submitBtn} onClick={e => uploadSubmit(e)}>Подвтердить</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.uploadWindow}>
                    <div className={`${styles.dropZone}`} onClick={e => e.stopPropagation()} {...getRootProps()}>
                        <input {...getInputProps()}/>
                        <p>Перетащите фотографию сюда</p>
                        <p>или нажмите, чтобы выбрать файл</p>
                    </div>
                    <button className={styles.cancelBtn} onClick={e => uploadCancel(e)}>Отменить</button>
                </div>
            )}
        </div>
    );
};

export default DropImage;