import { PutObjectCommand } from "@aws-sdk/client-s3";
import { S3 } from "aws-sdk";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { S3config } from "./config";

const UploadS3 = () => {
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);

  useEffect(() => {
    return upload?.abort();
  }, [upload]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!file) return;
    const s3Params = {
      Bucket: process.env.AWS_BUCKET_NAME || "",
      Key: file.name,
      Body: file,
    };
    console.log(s3Params);

    try {
      const uploadResponse = await S3config.send(
        new PutObjectCommand(s3Params)
      );
      console.log(`File uploaded successfully: ${file.name}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (upload) {
      upload.abort();
      setUpload(null);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <label
          htmlFor="file-upload"
          className="rounded bg-stone-800 p-4 text-white cursor-pointer shadow"
        >
          {file ? file.name : "Choose a file"}
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button
          className="rounded bg-green-500 p-2 shadow"
          onClick={handleUpload}
          disabled={!file}
        >
          Upload
        </button>
        {upload && (
          <button
            className="rounded bg-red-500 p-2 shadow"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadS3;
