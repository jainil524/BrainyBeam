import React, { useState, useCallback } from 'react';
import { useDropzone } from "react-dropzone";
import { CloudUpload, X, CheckCircle, AlertCircle } from 'lucide-react';

// Alert component
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => {
    return (
        <div
            ref={ref}
            role="alert"
            className={`rounded-lg border p-4 ${variant === 'destructive'
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200 bg-white text-gray-900'
                } ${className}`}
            {...props}
        />
    );
});
Alert.displayName = "Alert";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={`text-sm [&_p]:leading-relaxed ${className}`}
        {...props}
    />
));
AlertDescription.displayName = "AlertDescription";

// Progress component
const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
    <div
        ref={ref}
        className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
        {...props}
    >
        <div
            className="h-full w-full flex-1 bg-blue-500 transition-all"
            style={{ transform: `translateX(-${value}%` }}
        />
    </div>
));
Progress.displayName = "Progress";

// Utility function to format file size
const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Main ImageUpload component
const ImageUpload = () => {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        setFiles((prevFiles) => [
            ...prevFiles,
            ...acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                    progress: 0,
                    status: 'queued',
                })
            ),
        ]);
        setError(null);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: true,
        errorHandler: (errors) => {
            setError(errors[0].message);
        }
    });

    const removeFile = (index) => {
        setFiles((prevFiles) => {
            const newFiles = [...prevFiles];
            URL.revokeObjectURL(newFiles[index].preview);
            newFiles.splice(index, 1);
            return newFiles;
        });
    };

    const uploadFiles = async () => {
        setUploading(true);
        setError(null);

        console.log('Uploading files:', files);

        for (let i = 0; i < files.length; i++) {
            if (files[i].status === 'uploaded') continue;

            try {
                await simulateFileUpload(files[i], (progress) => {
                    setFiles((prevFiles) => {
                        console.log('Progress:', prevFiles);
                        const newFiles = [...prevFiles];
                        console.log("newFiles", newFiles, newFiles[i], newFiles[i].name );
                        newFiles[i] = { name: newFiles[i].name,preview: newFiles[i].preview ,size: newFiles[i].size , progress, status: 'uploading' };
                        return newFiles;
                    });
                });

                setFiles((prevFiles) => {
                    console.log('Uploaded:', prevFiles);
                    const newFiles = [...prevFiles];
                    newFiles[i] = { ...newFiles[i], progress: 100, status: 'uploaded' };
                    return newFiles;
                });
            } catch (err) {
                setFiles((prevFiles) => {
                    console.log('Error:', prevFiles);
                    const newFiles = [...prevFiles];
                    newFiles[i] = { ...newFiles[i], status: 'error' };
                    return newFiles;
                });
                setError(`Error uploading ${files[i].name}: ${err.message}`);
                break;
            }
        }

        setUploading(false);
    };

    const simulateFileUpload = (file, progressCallback) => {
        return new Promise((resolve, reject) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                progressCallback(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    if (Math.random() < 0.9) {
                        resolve();
                    } else {
                        reject(new Error('Random upload error'));
                    }
                }
            }, 500);
        });
    };

    React.useEffect(() => {
        // Cleanup function to revoke object URLs
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
            <div
                {...getRootProps()}
                className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                    }`}
            >
                <input {...getInputProps()} />
                <CloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                    {isDragActive ? 'Drop the images here' : 'Drag & drop images here, or click to select files'}
                </p>
            </div>

            {files.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Uploaded Files:</h3>
                    <ul className="space-y-4">
                        {files.map((file, index) => (
                            <li key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={file.preview}
                                        alt={file.name || "Unknown file"}
                                        className="w-16 h-16 object-cover rounded"
                                        onLoad={() => { URL.revokeObjectURL(file.preview) }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            {file.name || "Unnamed File"}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {file.size ? formatFileSize(file.size) : "Size not available"}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {file.status === 'uploaded' && (
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                        )}
                                        {file.status === 'error' && (
                                            <AlertCircle className="h-5 w-5 text-red-500" />
                                        )}
                                        {file.status !== 'uploaded' && file.status !== 'error' && (
                                            <Progress value={file.progress} className="w-20" />
                                        )}
                                        <button
                                            onClick={() => removeFile(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            )}

            {error && (
                <Alert variant="destructive" className="mt-6">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <button
                onClick={uploadFiles}
                disabled={uploading || files.length === 0}
                className={`mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${uploading || files.length === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    }`}
            >
                {uploading ? 'Uploading...' : (error ? "Re-upload" :'Upload Files')}
            </button>
        </div>
    );
};

export default ImageUpload;