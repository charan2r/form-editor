import React, { useState } from "react";

const FormEditor = () => {
  // Welcome Settings State
  const [welcomeTitle, setWelcomeTitle] = useState("Welcome");
  const [welcomeDescription, setWelcomeDescription] = useState("Welcome description");
  const [welcomeImage, setWelcomeImage] = useState(null);
  const [imagePosition, setImagePosition] = useState("center");

  // Email Settings State
  const [emailDescription, setEmailDescription] = useState("Email description");
  const [email, setEmail] = useState("Email");
  const [emailError, setEmailError] = useState("");

  // Handle Welcome Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setWelcomeImage(URL.createObjectURL(file));
  };

  // Handle Email Validation
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal.test(emailInput)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email");
    }
  };

  // Save and Remove Handlers for Welcome Settings
  const handleSaveWelcome = () => {
    alert("Welcome settings saved!");
  };

  const handleRemoveWelcome = () => {
    setWelcomeTitle("");
    setWelcomeDescription("");
    setWelcomeImage(null);
    setImagePosition("");
    alert("Welcome settings removed!");
  };

  // Save and Remove Handlers for Email Settings
  const handleSaveEmail = () => {
    alert("Email settings saved!");
  };

  const handleRemoveEmail = () => {
    setEmail("");
    setEmailDescription("");
    alert("Email settings removed!");
  };

  return (
    <><div className="form-editor-container">
      {/* Welcome Settings Form */}
      <form className="welcome-form">
        <h1>Welcome Screen Settings</h1>

        <h2>Title</h2>
        <input
          type="text"
          value={welcomeTitle}
          onChange={(e) => setWelcomeTitle(e.target.value)}
          placeholder="Welcome Title" />

        <h2>Description</h2>
        <textarea
          value={welcomeDescription}
          onChange={(e) => setWelcomeDescription(e.target.value)}
          placeholder="Welcome Description" />

        <h2>Upload</h2>
        <input type="file" onChange={handleImageUpload} />

        <h2>Placement</h2>
        <select
          value={imagePosition}
          onChange={(e) => setImagePosition(e.target.value)}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>

        <div className="welcome-preview clearfix">
          <h1>{welcomeTitle}</h1>
          <p>{welcomeDescription}</p>
          {welcomeImage && (
            <img
              src={welcomeImage}
              alt="Welcome"
              style={{ float: imagePosition }} />
          )}
        </div>

        <div className="button-container">
          <button type="button" onClick={handleSaveWelcome}>Save</button>
          <button type="button" onClick={handleRemoveWelcome}>Remove</button>
        </div>
      </form>
    </div>
    
    <br></br>

    <div className="form-editor-container">
        {/* Email Settings Form */}
        <form className="email-form">
          <h1>Email Settings</h1>

          <h2>Title</h2>
          <input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email" />

          <h2>Description</h2>
          <textarea
            value={emailDescription}
            onChange={(e) => setEmailDescription(e.target.value)}
            placeholder="Email Description" />
          {emailError && <p className="error-message">{emailError}</p>}

          <div className="button-container">
            <button type="button" onClick={handleSaveEmail}>Save</button>
            <button type="button" onClick={handleRemoveEmail}>Remove</button>
          </div>
        </form>
      </div></>
  );
};

export default FormEditor;
