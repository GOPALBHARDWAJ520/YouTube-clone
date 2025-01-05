import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            const response = await axios.get(`/api/videos/${id}`);
            setVideo(response.data);
        };

        const fetchComments = async () => {
            const response = await axios.get(`/api/comments/${id}`);
            setComments(response.data);
        };

        fetchVideo();
        fetchComments();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!commentText) return;

        const response = await axios.post('/api/comments', { text: commentText, videoId: id });
        setComments([...comments, response.data]);
        setCommentText('');
    };

    if (!video) return <div>Loading...</div>;

    return (
        <div className="video-player">
            <ReactPlayer url={video.url} controls />
            <h1 className="text-2xl font-bold">{video.title}</h1>
            <p>{video.description}</p>

            <div className="comments-section">
                <h2 className="text-xl">Comments</h2>
                <form onSubmit={handleCommentSubmit}>
                    <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Add a comment..."
                        className="border p-2"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
                </form>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment._id} className="border-b p-2">{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VideoPlayer;