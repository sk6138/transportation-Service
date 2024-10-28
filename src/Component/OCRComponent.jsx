// import React, { useState, useRef } from 'react';
// import Tesseract from 'tesseract.js';

// const OCRWithImageComponent = () => {
//   const [image, setImage] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null); // Image preview for the user
//   const canvasRef = useRef(null); // Reference for canvas preprocessing

//   // Handle image upload and preview it
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setImagePreview(URL.createObjectURL(file)); // Show the uploaded image
//   };

//   // Preprocess the image: Convert to grayscale and increase contrast
//   const preprocessImage = (imageFile) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const img = new Image();

//     img.src = URL.createObjectURL(imageFile);
//     return new Promise((resolve) => {
//       img.onload = () => {
//         // Set canvas size to match image size
//         canvas.width = img.width;
//         canvas.height = img.height;

//         // Draw image on canvas
//         ctx.drawImage(img, 0, 0);

//         // Get the image data (RGBA values)
//         const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//         const data = imageData.data;

//         // Convert image to grayscale and enhance contrast
//         for (let i = 0; i < data.length; i += 4) {
//           const avg = (data[i] + data[i + 1] + data[i + 2]) / 3; // Average for grayscale
//           const contrast = avg > 128 ? 255 : 0; // Contrast adjustment
//           data[i] = data[i + 1] = data[i + 2] = contrast;
//         }

//         // Put back processed image data on canvas
//         ctx.putImageData(imageData, 0, 0);

//         // Resolve with canvas image for OCR
//         canvas.toBlob((blob) => resolve(blob));
//       };
//     });
//   };

//   // Perform OCR with Hindi and English text extraction
//   const handleOCR = async () => {
//     if (image) {
//       setLoading(true);

//       // Preprocess the image before passing to Tesseract.js
//       const processedImage = await preprocessImage(image);

//       Tesseract.recognize(
//         processedImage,
//         'hin+eng', // Extract Hindi and English text
//         {
//           logger: (m) => console.log(m), // Show progress
//         }
//       )
//         .then(({ data: { text } }) => {
//           setExtractedText(text); // Set extracted text
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error(err);
//           setLoading(false);
//         });
//     }
//   };

//   // Download extracted text as JSON and include image reference
//   const downloadAsJson = () => {
//     const data = {
//       extractedText: extractedText,
//       image: image.name, // Reference to the original image
//     };
//     const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'extracted-data.json';
//     link.click();
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>OCR with Enhanced Image Preprocessing (Hindi & English)</h1>

//       {/* File input to upload image */}
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       <br />

//       {/* Show image preview */}
//       {imagePreview && (
//         <div>
//           <h3>Uploaded Image with Diagram:</h3>
//           <img src={imagePreview} alt="Uploaded Diagram" style={{ maxWidth: '400px', marginTop: '10px' }} />
//         </div>
//       )}

//       {/* Invisible canvas used for preprocessing the image */}
//       <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

//       {/* Button to extract text */}
//       <button onClick={handleOCR} disabled={!image || loading}>
//         {loading ? 'Processing...' : 'Extract Text'}
//       </button>

//       {/* Show extracted text */}
//       {extractedText && (
//         <div>
//           <h3>Extracted Text:</h3>
//           <textarea rows="10" cols="50" value={extractedText} readOnly />
//           <br />
//           <button onClick={downloadAsJson}>Download as JSON</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OCRWithImageComponent;
