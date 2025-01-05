import React from 'react';
import { Link } from 'react-router-dom';

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map(video => (
        <div key={video._id} className="border rounded-lg overflow-hidden shadow-lg">
          <Link to={`/video/${video._id}`}>
            <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{video.title}</h3>
              <p className="text-gray-600">{video.channelName}</p>
              <p className="text-gray-500">{video.views} views • {new Date(video.createdAt).toLocaleDateString()}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;