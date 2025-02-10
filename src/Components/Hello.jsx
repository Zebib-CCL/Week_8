import React, { useState } from 'react';
import '../App.css'; 


const NamePrompt = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = () => {
    setSubmittedName(name); 
  };

  return (
    <div>
      <h1>What's your name?</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>

      {submittedName && (
        <p>Hello, {submittedName}! Welcome!</p> 
      )}
    </div>
  );
};

export default NamePrompt;
