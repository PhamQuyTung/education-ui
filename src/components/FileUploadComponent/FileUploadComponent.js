import { useState, useEffect, useRef } from 'react';
import styles from './FileUploadComponent.module.scss';

const FileUpload = ({ onFilesChange }) => {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
        setFiles(savedFiles);
        onFilesChange(savedFiles.length > 0); // Gửi trạng thái lên component cha
    }, []);

    const saveFilesToStorage = (fileList) => {
        localStorage.setItem('uploadedFiles', JSON.stringify(fileList));
    };

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files).map((file) => file.name);
        const updatedFiles = [...files, ...selectedFiles];

        setFiles(updatedFiles);
        saveFilesToStorage(updatedFiles);
        onFilesChange(updatedFiles.length > 0); // Cập nhật trạng thái button Next

        event.target.value = '';
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        saveFilesToStorage(updatedFiles);
        onFilesChange(updatedFiles.length > 0); // Kiểm tra còn file không
    };

    return (
        <div className={styles.uploadContainer}>
            <label className={styles.uploadBox}>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg,.png,.jpeg"
                    multiple
                    onChange={handleFileChange}
                    className={styles.hiddenInput}
                />
                <span className={styles.uploadText}>
                    {files.length > 0 ? `${files.length} file đã chọn` : 'Chọn file để upload'}
                </span>
            </label>

            {files.length > 0 && (
                <ul className={styles.fileList}>
                    {files.map((file, index) => (
                        <li key={index} className={styles.fileItem}>
                            {file}
                            <button onClick={() => handleRemoveFile(index)} className={styles.removeBtn}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FileUpload;
