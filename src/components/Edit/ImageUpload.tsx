import { FileInput } from "@blueprintjs/core";
import React, { useState } from "react";

interface ImageUploadProps {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  createObjectURL: string | null;
  setCreateObjectURL: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  createObjectURL,
  setCreateObjectURL,
  setImage,
  image,
}) => {
  const [filename, setFilename] = useState("");
  const uploadToClient: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFilename(event.target.files[0].name);
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          textAlign: "center",
          lineHeight: "0px",
        }}
      >
        <img
          style={{
            maxHeight: "150px",
            objectFit: "contain",
            overflow: "hidden",
          }}
          src={createObjectURL || ""}
        />
      </div>
      <FileInput
        text={filename || "Wybierz obraz"}
        onInputChange={uploadToClient}
        style={{
          marginBottom: "10px",
          width: "100%",
        }}
        inputProps={{
          accept: "image/png, image/gif, image/jpeg",
        }}
      />
    </div>
  );
};

export default ImageUpload;
