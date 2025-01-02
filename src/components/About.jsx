import { useRef, useState } from "react";
import play from "../assets/icons/play.svg";
import pause from "../assets/icons/pause.svg";
import about from "../assets/videos/about.mp4";

function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-gray-800">
          <span className="font-bold text-blue-600">About</span> Company
        </h2>
        <p className="text-center mt-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.....
        </p>
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-screen-xl">
            <video
              ref={videoRef}
              className="rounded-lg w-full h-auto"
              onClick={handlePlayPause}
            >
              <source src={about} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              tabIndex="0"
            >
              <img
                src={isPlaying ? pause : play}
                alt={isPlaying ? "Pause" : "Play"}
                className="h-16 w-16"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
