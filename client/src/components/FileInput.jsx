import React, { useState } from 'react';

function FileInput() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // You can perform additional actions with the selected file here
    // For example, you can upload it to a server or process it in some way.
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf, .doc, .docx, .jpg, .png" // Specify the allowed file types
        onChange={handleFileChange}
      />
      <div>
        {selectedFile && (
          <p>
            Selected File: {selectedFile.name}
            {/* You can display more information about the selected file if needed */}
          </p>
        )}
      </div>
    </div>
  );
}

export default FileInput;
