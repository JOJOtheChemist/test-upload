import React, { Component } from 'react';

class UploadForm extends Component {
  state = {
    uploadedFileData: null,
  };

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileData = reader.result;
      localStorage.setItem('uploadedFile', fileData);
      this.setState({ uploadedFileData: fileData });
    };

    reader.readAsDataURL(file);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  render() {
    const { uploadedFileData } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="fileInput">Upload PDF:</label>
          <input type="file" id="fileInput" accept=".pdf" onChange={this.handleFileUpload} />
        </div>
        <button type="submit">Submit</button>
        {uploadedFileData && (
          <div>
            <h2>Uploaded PDF:</h2>
            <iframe src={uploadedFileData} title="Uploaded file" />
          </div>
        )}
      </form>
    );
  }
}

export default UploadForm;