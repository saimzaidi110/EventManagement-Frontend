import React, { useState } from 'react';
import { apiurl } from '../../api';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    theme: '',
    imageUrl: '',
    booths: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const payload = {
      ...formData,
      booths: Number(formData.booths),
      date: new Date(formData.date).toISOString()
    };

    try {
      const response = await fetch(apiurl+'/api/expos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ ' + result.message);
        setFormData({
          title: '',
          date: '',
          location: '',
          description: '',
          theme: '',
          imageUrl: '',
          booths: ''
        });
      } else {
        setError('❌ ' + result.message);
      }
    } catch (err) {
      setError('❌ Failed to connect to the server.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>Create Expo Event</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input type="text" name="title" placeholder="Expo Title" value={formData.title} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="text" name="theme" placeholder="Theme" value={formData.theme} onChange={handleChange} />
        <input type="url" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
        <input type="number" name="booths" placeholder="Number of Booths" value={formData.booths} onChange={handleChange} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#0a74da', color: '#fff', border: 'none' }}>
          Create Expo
        </button>
      </form>

      {message && <p style={{ color: 'green', marginTop: '20px' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
    </div>
  );
};

export default CreateEvent;
