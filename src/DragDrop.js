import React, { useState } from "react";

const DragDrop = () => {
  const [droppedImage, setDroppedImage] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default to allow drop
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    // Check if the dropped file is an image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        setDroppedImage(reader.result); // Set the image preview
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please drop an image file!");
    }
  };

  return (
    <div
      style={{
        border: "2px dashed #ccc",
        borderRadius: "8px",
        width: "300px",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px auto",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {droppedImage ? (
        <img
          src={droppedImage}
          alt="Dropped"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <p>Drag and drop an image here</p>
      )}
    </div>
  );
};

export default DragDrop;
