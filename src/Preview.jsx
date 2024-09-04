// src/Preview.jsx
import React from 'react';
import letter from './letter.mp3';
const Preview = () => {
  const htmlCode = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Message</title>
    <style type="text/css">
        @import "compass/reset";

        .stars, .twinkling, .clouds {
            position: absolute;
            display: block;
            top: 0; bottom: 0;
            left: 0; right: 0;
            width: 100%; height: 100%;
        }

        .stars {
            z-index: 0;
            background: #000 url('https://i.ibb.co/g91MwKZ/stars.png') repeat top center;
        }

        .twinkling {
            z-index: 1;
            background: transparent url('https://i.ibb.co/pnJQm6V/twinkling.png') repeat top center;
            animation: move-twink-back 200s linear infinite;
        }

        .clouds {
            z-index: 2;
            background: transparent url('https://i.ibb.co/BsG8rYZ/clouds.png') repeat top center;
            animation: move-clouds-back 200s linear infinite;
        }

        @keyframes move-twink-back {
            from { background-position: 0 0; }
            to { background-position: -10000px 5000px; }
        }

        @keyframes move-clouds-back {
            from { background-position: 0 0; }
            to { background-position: 10000px 0; }
        }

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100%;
        }
        @media (min-width: 300px) and (max-width: 600px) {
        html, body {
            height: 100%;
            padding-top: 200px;
        }
}
        body {
            width: 100%;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        @media (max-height: 500px) {
            body {
                margin: 25% 0 25% 0;
            }
        }

        .envelop {
            width: 15rem;
            height: 10rem;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
        }

        @media (min-width: 400px) and (max-width: 600px) {
            .envelop {
                width: 20rem;
                height: 15rem;
            }
        }

        @media (min-width: 600px) {
            .envelop {
                width: 25rem;
                height: 20rem;
            }
        }

        @media (min-width: 600px) and (min-height: 600px) {
            .envelop {
                bottom: 20%;
            }
        }

        .envelop__front-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            border-radius: 0.7rem;
            border: 0.35rem solid #967b5c;
            background-color: #ba9872;
            clip-path: polygon(100% 0%, 50% 70%, 0% 0%, 0% 100%, 100% 100%);
            z-index: 300;
        }

        .envelop__back-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            border-radius: 0.7rem;
            background-color: #967b5c;
            clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 90%);
            z-index: 100;
        }

        .envelop__up-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: relative;
            border-radius: 0.7rem;
            background-color: #967b5c;
            z-index: 400;
            clip-path: polygon(0% 0%, 100% 0%, 50% 81%);
        }

        .envelop__sticker {
            width: 100%;
            height: 20%;
            position: absolute;
            margin: auto;
            top: 30%;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 400;
            background-image: url("https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png");
            background-color: #f9f9f9;
            border: 0.3rem solid #e2e2e2;
            background-size: 2rem;
            background-position: center;
        }

        @media (max-width: 400px) {
            .envelop__sticker {
                background-size: 1.2rem;
            }
        }

        @media (min-width: 600px) {
            .envelop__sticker {
                height: 15%;
            }
        }

        .envelop__false-sticker {
            width: 20%;
            height: 20%;
            position: absolute;
            margin: auto;
            top: 30%;
            left: 80%;
            bottom: 0;
            right: 0;
            z-index: 300;
            background-image: url("https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png");
            background-color: #f9f9f9;
            border: 0.3rem solid #e2e2e2;
            background-size: 2rem;
            background-position: center;
        }

        @media (max-width: 400px) {
            .envelop__false-sticker {
                background-size: 1.2rem;
            }
        }

        @media (min-width: 600px) {
            .envelop__false-sticker {
                height: 15%;
            }
        }

        .envelop__content {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            z-index: 200;
        }

        .love-notes {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: left;
        }

        .note {
            width: 95%;
            height: 30%;
            background-color: #f9f9f9;
            position: absolute;
            overflow: hidden;
            transition: height 0.5s, opacity 0.25s;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        }

        .note:nth-child(1) {
            bottom: 64%;
        }

        .note:nth-child(2) {
            bottom: 42%;
        }

        .note:nth-child(3) {
            bottom: 20%;
        }

        .note:hover {
            cursor: pointer;
            height: 50%;
        }

        .note__text {
            font-family: "Roboto";
            padding: 1rem;
        }

        .note__text p {
            font-size: 16px;
            margin-bottom: 1rem;
            text-align: left;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }

        @media (min-width: 300px) and (max-width: 600px) {
            .note__text p {
                font-size: 12px;
            }
        }

        @media (min-width: 600px) {
            .note__text p {
                font-size: 16px;
            }
        }

        .scissors {
            cursor: url("https://i.postimg.cc/GtLCdKxR/sisors.png"), pointer;
        }

        .scissors:active {
            cursor: url("https://i.postimg.cc/GtXQ7WPZ/pngwing-com.png"), pointer;
        }

        .cursor {
            cursor: pointer;
        }

        .heading {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 50px;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            z-index: 400;
            text-align: center;
        }
        .sub-heading{
        position: absolute;
        padding-top:30px;
            top: 15%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 25px;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            z-index: 400;
            text-align: center;
        }
        @media (min-width: 300px) and (max-width: 600px) {
            .heading{
                font-size: 30px;
                top: 60%;
                
            }
            .sub-heading{
                font-size: 20px;
                top: 80%;
            }
        }
        @media (min-width: 595px) and (max-width: 1020px){
            .sub-heading{
            padding-top: 80px;
            }
        }
    </style>
</head>
<body class="scissors">
    <div class="stars">
        <div class="twinkling">
            <div class="clouds">
                <audio id="background-music" src="${letter}"></audio>
                <div class="container-env">
                <div class="envelop">
                    <div class="envelop__front-paper"></div>
                    <div class="envelop__back-paper"></div>
                    <div class="envelop__up-paper js-up-paper"></div>
                    <div class="envelop__sticker js-sticker"></div>
                    <div class="envelop__false-sticker"></div>
                    <div class="envelop__content js-envelop-content">
                        <div class="love-notes">
                            <div class="note js-note">
                                <div class="note__text">
                                    <p ;">Hey Sanzida</p>
                                    <p> I hope you are in sound health & mind. 
I would like to apologize for my comment regarding the pictures that you sent me a few days ago. I realized that my words may have come across as insensitive and dismissive. It was not intended to hurt your feelings or make you feel as if you were obligated to send me anything special.</p>
                                </div>
                            </div>
                            <div class="note js-note">
                                <div class="note__text">
                                    <p>I understand why you might have felt upset with my comment, and it was not my place to question your choices. You have every right to share your photos however and wherever you want, and I regret making you feel as though you needed to provide me with something special.
I am sorry for that and I apologize.I hope you know how much I value our friendship and that your feelings matter to me.</p>
                                </div>
                            </div>
                            <div class="note js-note">
                                <div class="note__text">
                                    <p> I hope you will forgive me for my thoughtless words. I’d love to talk things over and rebuild the trust that may have been hurt.</p>
                                    <p>Thank you for considering my apology. I genuinely hope to hear from you soon.</p>
                                    </br>
                                    <p >With all my heart</p>
                                    <p >Ziad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="heading">A special message awaits</div>
    <div class="sub-heading">Click to Unwrap My Heartfelt Words</div>
    <script type="text/javascript">
        //->Made it by 1vanbrav0
        //Variables
        let mobile_media_query = window.matchMedia("(max-width: 400px)");
        let tablet_media_query = window.matchMedia("(min-width: 400px) and (max-width: 600px)");
        const notes = document.querySelectorAll(".js-note");
        const music = document.getElementById("background-music");

        //-> Function that resets the size of the notes.
        function recize_notes() {
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].classList.contains("active")) {
                    notes[i].classList.remove("active");
                    gsap.set(notes[i], {
                        height: "30%",
                        clearProps: "all"
                    });
                }
            }
        }

        //-> Main function that enables all the notes.
        function notes_ready() {
            gsap.to(".js-envelop-content", {
                height: "125%",
                duration: 0.5
            });

            for (let i = 0; i < notes.length; i++) {
                notes[i].addEventListener("click", function () {
                    if (mobile_media_query.matches) {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 125 + 40 * i + "%"
                            });
                        }
                    } else if (tablet_media_query.matches) {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 80 + 21 * i + "%"
                            });
                        }
                    } else {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 70 + 20 * i + "%"
                            });
                        }
                    }
                });
            }
        }

        //-> Function that set up the up paper of the envelope.
        function set_up_paper() {
    var arr = [0, 0, 100, 0, 50, 61];
    gsap.set(".js-up-paper", {
        bottom: "97%",
        rotation: 180,
        zIndex: 200,
        clipPath: "polygon(" +
            arr[0] + "%" +
            arr[1] + "%," +
            arr[2] + "%" +
            arr[3] + "%," +
            arr[4] + "%" +
            arr[5] + "%)",
        onComplete: notes_ready
    });
}


        //-> Function that starts the up paper transition.
        function envelop_transition() {
            gsap.to(".js-up-paper", {
                bottom: "1%",
                duration: 0.25,
                onComplete: set_up_paper
            });
            document.querySelector(".js-up-paper").removeEventListener("click", envelop_transition);
            document.querySelector(".js-up-paper").classList.remove("cursor");

            // Play the background music when the envelope opens
            music.play();
        }

        //-> Function that allows cut the sticker.
        function sticker() {
            gsap.set(".js-sticker", { width: "20%", left: "-80%" });
            document.body.classList.remove("scissors");
            document.querySelector(".js-sticker").removeEventListener("click", sticker);
            document.querySelector(".js-up-paper").addEventListener("click", envelop_transition);
            document.querySelector(".js-up-paper").classList.add("cursor");
        }

        document.querySelector(".js-sticker").addEventListener("click", sticker);

        window.onresize = function (event) {
            recize_notes();
        };
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>

  `;

  return (
    <div className="preview-container">
      <iframe
        srcDoc={htmlCode}
        style={{ width: '100vw', height: '100vh', border: 'none', overflow: 'hidden' }}
        title="preview"
      ></iframe>
    </div>
  );
};

export default Preview;
