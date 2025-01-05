import React, { useState } from 'react';
import axios from 'axios';

const ChannelPage = () => {
  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const handleChannelCreate = async (e) => {
    e.preventDefault();
    // Logic to create a channel
  };

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    // Logic to upload a video
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create and Manage Your Channel</h1>
      <form onSubmit={handleChannelCreate} className="my-4">
        <input
          type="text"
          placeholder="Channel Name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full my-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Create Channel
        </button>
      </form>

      <h2 className="text-xl font-semibold">Upload Video</h2>
      <form onSubmit={handleVideoUpload} className="my-4">
        <input
          type="file"
          onChange={(e) => setVideoFile(e.target.files[0])}
          className="my-2"
          required
        />
        <input
          type="file"
          onChange={(e) => setThumbnailFile(e.target.files[0])}
          className="my-2"
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2">
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default ChannelPage;