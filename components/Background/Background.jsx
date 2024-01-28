import React, { useEffect } from "react";

const VideoBackground = () => {
    useEffect(() => {
        const video = document.querySelector("#video-background");
        video.play();
    }, []);

    return (
        <div>
            <video
                id="video-background"
                controls={false} muted={true} autoplay={true} loop={true}
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    width: "auto",
                    height: "auto",
                    zIndex: "-100",
                    objectFit: "cover",
                }}
            >
                <source src="/test0.mp4" type="video/mp4" />
                
       
            </video>
        </div>
    );
};

export default VideoBackground;
