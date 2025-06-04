import React, { useState, useRef, useEffect } from 'react';
import VideoPlayer from 'react-video-js-player';
import ReactPlayer from 'react-player/lazy'

const Video = ({detailData}) => {
      
    const playerRef = useRef(null);
    const [videoState, setVideoState] = useState({
        src: "https://videoserver.nvli.in/nvli/ICP/historicCity/Nizamuddin_with_Logo_and_End_Slide.mp4",
        poster: "http://www.example.com/path/to/video_poster.jpg"
    });
    
    const onPlayerReady = player => {
        console.log("Player is ready: ", player);
        playerRef.current = player;
    };

    const onVideoPlay = duration => {
        console.log("Video played at: ", duration);
    };

    const onVideoPause = duration => {
        console.log("Video paused at: ", duration);
    };

    const onVideoTimeUpdate = duration => {
        console.log("Time updated: ", duration);
    };

    const onVideoSeeking = duration => {
        console.log("Video seeking: ", duration);
    };

    const onVideoSeeked = (from, to) => {
        console.log(`Video seeked from ${from} to ${to}`);
    };

    const onVideoEnd = () => {
        console.log("Video ended");
    };
  
    return (
        <div>
            {detailData.title}
           {detailData.field_ic_video_streaming_url? (<ReactPlayer
                controls={true}
                url={detailData.field_ic_video_streaming_url}
                poster={videoState.poster}
                width="500"
                height="320"
                onReady={onPlayerReady}
                onPlay={onVideoPlay}
                onPause={onVideoPause}
                onTimeUpdate={onVideoTimeUpdate}
                onSeeking={onVideoSeeking}
                onSeeked={onVideoSeeked}
                onEnd={onVideoEnd}
            />):("")}
            {detailData.field_ich_videos? (<ReactPlayer
                controls={true}
                url={detailData.field_ich_videos}
                poster={videoState.poster}
                width="500"
                height="320"
                onReady={onPlayerReady}
                onPlay={onVideoPlay}
                onPause={onVideoPause}
                onTimeUpdate={onVideoTimeUpdate}
                onSeeking={onVideoSeeking}
                onSeeked={onVideoSeeked}
                onEnd={onVideoEnd}
            />):("")}
            {detailData.field_video_streaming_url? (<ReactPlayer
                controls={true}
                url={detailData.field_video_streaming_url}
                poster={videoState.poster}
                width="500"
                height="200"
                onReady={onPlayerReady}
                onPlay={onVideoPlay}
                onPause={onVideoPause}
                onTimeUpdate={onVideoTimeUpdate}
                onSeeking={onVideoSeeking}
                onSeeked={onVideoSeeked}
                onEnd={onVideoEnd}
            />):("")}
        </div>
    );
};

export default Video;
