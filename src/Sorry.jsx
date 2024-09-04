import React from 'react';
import nope from './nope.mp3';
import yes from './yes.mp3';
import SorryImg from './pls.gif';
const Sorry = () => {
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Will You Go on a Date With Me?</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

      <link rel="icon" href="https://em-content.zobj.net/source/skype/289/red-heart_2764-fe0f.png" type="image/x-icon">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          height: 100%;
        }

        body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: sans-serif;
          font-size: 1.2rem;
          background-color: #f2f2f2;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .gif-container {
          margin-bottom: 1rem;
        }

        .gif-container img {
          max-width: 100%;
          height: auto;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        button {
          padding: 1rem 2rem;
          margin: 0 1rem;
          border-radius: 5px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }

        button:hover {
          transform: scale(1.1);
        }

        #no-button {
          background-color: #e74c3c;
          color: #fff;
        }

        #no-button:hover {
          animation: shake 0.5s;
          animation-iteration-count: infinite;
        }

        @keyframes shake {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-5px, 0);
          }
          50% {
            transform: translate(0, -5px);
          }
          75% {
            transform: translate(5px, 0);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        #yes-button {
          background-color: #2ecc71;
          color: #fff;
        }

        #confetti-canvas {
          width: 0%;
          height: 0%;
        }

        .octo-arm {
          animation: rotateTail 2s ease-in-out infinite;
        }

        @keyframes rotateTail {
          0% {
            transform: rotate(0);
          }
          20% {
            transform: rotate(20deg);
          }
          40% {
            transform: rotate(0deg);
          }
          60% {
            transform: rotate(-20deg);
          }
          80% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0);
          }
        }

        @media screen and (max-width: 768px) {
          header {
            font-size: 1.5rem;
          }
          main {
            padding: 1rem;
          }
          .gif-container {
            margin-bottom: 0.5rem;
          }
          button {
            padding: 0.5rem 1rem;
            margin: 0.5rem;
            font-size: 1rem;

          }
        }
          
      </style>
    </head>
    <body>
      <header id="main">
        <h1>Will You Forgive Me, 🧠🤝? 🥺</h1>
      </header>
      <main>
        <canvas id="confetti-canvas"></canvas>
        <div class="gif-container">
          <img id="gif" src="${SorryImg}" alt="Please">
        </div>
        <div class="button-container">
          <button id="no-button">No</button>
          <button id="yes-button">Yes</button>
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js"></script>
     <script>
  // Define the notify function to use the Firebase Realtime Database
  window.notifyYesClicked = () => {
    const databaseURL = 'https://myapp-e5581-default-rtdb.asia-southeast1.firebasedatabase.app/'; // Replace with your Firebase Realtime Database URL
    const ref = '/response'; // Replace with your Firebase Realtime Database path

    const timestamp = new Date().toISOString();
    const userAgent = navigator.userAgent;

    fetch(\`\${databaseURL}/\${ref}.json\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clicked: true,
        timestamp: timestamp,
        device: userAgent
      }),
    });
  };

  const nopeAudio = new Audio("${nope}");
  const yesAudio = new Audio("${yes}");

  const noButton = document.getElementById("no-button");
  noButton.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const adjustedX = Math.min(x, maxX);
    const adjustedY = Math.min(y, maxY);
    nopeAudio.play();
    noButton.style.position = "absolute";
    noButton.style.left = adjustedX + "px";
    noButton.style.top = adjustedY + "px";
  });

  const yesButton = document.getElementById("yes-button");
  yesButton.addEventListener("click", () => {
    yesAudio.play();
    const confettiElement = document.getElementById("confetti-canvas");
    const confettiSettings = {
      target: confettiElement,
      max: 200,
      size: 1,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
      clock: 25,
      rotate: true,
      start_from_edge: true,
      respawn: true
    };

    yesButton.style.display = "none";
    noButton.style.display = "none";
    document.getElementById("gif").style.display = "none";
    document.getElementById("main").style.display = "none";

    confettiElement.style.position = "absolute";
    confettiElement.style.top = "0";
    confettiElement.style.left = "0";
    confettiElement.style.width = "100%";
    confettiElement.style.height = "100%";
    confettiElement.style.zIndex = "1000";

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    const p = document.createElement("p");
    p.innerText = "Thank You So Much! 🎉 \\nYour forgiveness means the world to me.\\nLet’s reconnect and create new memories together. 💖🌟";
    p.style.fontSize = "2rem";
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    p.style.position = "absolute";
    p.style.top = "50%";
    p.style.left = "50%";
    p.style.transform = "translate(-50%, -50%)";
    p.style.zIndex = "1001"; // Ensure text is above other elements
    document.body.appendChild(p);

    // Create social media links with FontAwesome icons
    const linksContainer = document.createElement("div");
    linksContainer.style.position = "absolute";
    linksContainer.style.bottom = "10px";
    linksContainer.style.left = "50%";
    linksContainer.style.transform = "translateX(-50%)";
    linksContainer.style.textAlign = "center";
    linksContainer.style.fontSize = "2rem";
    linksContainer.style.zIndex = "1001"; // Ensure icons are above other elements

    const facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com/m.rahmanziad";
    facebookLink.target = "_blank";
    facebookLink.innerHTML = '<i class="fab fa-facebook-f"></i>';
    facebookLink.style.margin = "0 15px";
    facebookLink.style.color = "#3b5998";

    const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/rz_iad/";
    instagramLink.target = "_blank";
    instagramLink.innerHTML = '<i class="fab fa-instagram"></i>';
    instagramLink.style.margin = "0 15px";
    instagramLink.style.color = "#C13584";

    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/01521712644";
    whatsappLink.target = "_blank";
    whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappLink.style.margin = "0 15px";
    whatsappLink.style.color = "#25D366";

    const messengerLink = document.createElement("a");
    messengerLink.href = "https://m.me/m.rahmanziad"; // Replace with your Messenger link
    messengerLink.target = "_blank";
    messengerLink.innerHTML = '<i class="fab fa-facebook-messenger"></i>';
    messengerLink.style.margin = "0 15px";
    messengerLink.style.color = '0099FF'



    linksContainer.appendChild(facebookLink);
    linksContainer.appendChild(instagramLink);
    linksContainer.appendChild(whatsappLink);
    linksContainer.appendChild(messengerLink);
    document.body.appendChild(linksContainer);

    // Notify the server
    window.notifyYesClicked();
  });
</script>



    </body>
    </html>
  `;

  return (
    <div className='sorry-container'>
      <iframe
        srcDoc={htmlCode}
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          overflow: 'hidden',
        }}
        title='sorry'
      ></iframe>
    </div>
  );
};

export default Sorry;
