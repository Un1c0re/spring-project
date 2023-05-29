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
            const response = await axios.post("/api/avatar", data);
            setMsg({msg: response.data.status});
        } catch (e) {
            setMsg({err: e.response.data.status});
            console.log(msg);
        };
    }

    return (
        <div className={ active ? `${styles.bg} ${styles.active}` : styles.bg} onClick={()=> setActive(false)}>
            <div className={styles.box} onClick={e => e.stopPropagation()} {...getRootProps()}>
                <input {...getInputProps()}/>

                {image ? (
                    <div className={styles.content}>
                        <img src={image} alt="Загруженное изображение" />
                        <button className="btn-warning" onClick={e => uploadSubmit(e)}>Подвтердить</button>
                    </div>
                ) : (
                    <p>Перетащите фотографию сюда или нажмите, чтобы выбрать файл</p>
                )}
            </div>
        </div>
    );
};

export default DropImage;
