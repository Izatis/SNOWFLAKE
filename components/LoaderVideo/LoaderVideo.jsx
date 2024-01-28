import React, { useEffect } from "react";

const LoaderVideo = () => {
    useEffect(() => {
        const video = document.querySelector("#loader-background");
        video.play();
    }, []);

    return (
        <div>
            <video
                id="loader-background"
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
                <source src="/back.webm" type="video/webm" />
                <source src="/back.mp4" type="video/mp4" />
                <source src="/back2.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default LoaderVideo;
