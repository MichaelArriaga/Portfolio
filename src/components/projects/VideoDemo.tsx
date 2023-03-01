import React, { useState, useEffect } from "react";
import {ColorRing} from  'react-loader-spinner'

type PropTypes = {
  src: string;
};

const VideoDemo: React.FC<PropTypes> = ({ src }): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);


  return (
    <div className={`relative mb-8 ${!showVideo ? 'border border-gray-400 rounded-lg' : null}`}>
        <video
          playsInline={true}
          autoPlay={true}
          muted={true}
          controls={false}
          loop={true}
          className={`w-full ${showVideo ? 'block' : 'invisible'} w-full mx-auto mb-8 shadow-lg rounded-lg border border-gray-400`}
          src={src}
          onLoadedData={() => {
            // setTimeout(() => {
            //   console.log("onLoadedData");

            // }, 3000)
            setIsLoading(false);
            setShowVideo(true);
          }}
        >
        </video>

      {isLoading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
      ) : null}
    </div>
  );
};

export default VideoDemo;
