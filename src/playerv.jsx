import React from 'react';
import srcVideo from './video.mp4';
const Playerv = () => {
  const htmlCode = `
   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Reel Player</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .moving-gradient {
            background: linear-gradient(270deg, #b3e0ff, #99ccff, #66b3ff, #3399ff, #0099ff);
            background-size: 600% 600%;
            animation: gradientMove 12s ease infinite;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 2rem;
        }

        .container {
            position: relative;
            width: 100%;
            max-width: 400px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .heading {
            font-size: 2.5rem;
            margin-bottom: 20px;
            font-weight: bold;
            padding-top: 10px;
        }

        video {
            width: 90%;
            max-width: 400px;
            aspect-ratio: 9/16; /* Instagram Reels aspect ratio */
            border-radius: 10px;
            display: none;
        }

        .play-button {
            font-size: 18px;
            padding: 15px 30px;
            background: linear-gradient(135deg, #ff6f61, #ff9a9e);
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            font-weight: bold;
            text-transform: uppercase;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }

        .play-button:hover {
            background: linear-gradient(135deg, #ff9a9e, #ff6f61);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
            transform: translateY(-4px);
        }

        .play-button:active {
            transform: translateY(2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
    </style>
</head>
<body>
    <div class="moving-gradient">
        <div class="container">
            <div class="heading">And, one last thing...</div>
            <button class="play-button" id="playButton">What?</button>
            <video id="reel" playsinline>
                <source src="${srcVideo}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <script>
        document.getElementById('playButton').addEventListener('click', function() {
            const video = document.getElementById('reel');
            video.style.display = 'block';
            video.play();
            this.style.display = 'none';
        });
    </script>
</body>
</html>

  `;

  return (
    <div className='playerv-container'>
      <iframe
        srcDoc={htmlCode}
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          overflow: 'hidden',
        }}
        title='Playerv'
      ></iframe>
    </div>
  );
};

export default Playerv;
