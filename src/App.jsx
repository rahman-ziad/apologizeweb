import { useRef, useEffect, useState } from 'react';
import moon from './section-1.webp';
import land from './section-3.webp';
import hill from './section-2.webp';
import cat from './bear.gif';
import rainSound from './rain1.mp3';
import Preview from './Preview';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Sorry from './Sorry';
import Slider from './Slider';
import Playerv from './playerv';
import { FaHeadphones, FaDesktop } from 'react-icons/fa'; // Importing icons

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const audioRef = useRef(new Audio(rainSound));

  // Function to handle starting the interaction
  const handleStart = () => {
    setShowPopup(false);
    const audio = audioRef.current;
    audio.loop = false;
    audio.play().catch((error) => console.log('Error playing audio:', error));
  };

  useEffect(() => {
    const audio = audioRef.current;

    const section2Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            audio.play().catch((error) => console.log('Error playing audio:', error));
          }
        });
      },
      { threshold: 0.5 }
    );

    const section3Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            audio.play().catch((error) => console.log('Error playing audio:', error));
          }
        });
      },
      { threshold: 0.5 }
    );

    const section2 = document.querySelector('#section-2');
    const section3 = document.querySelector('#section-3');

    if (section2) section2Observer.observe(section2);
    if (section3) section3Observer.observe(section3);

    return () => {
      if (section2) section2Observer.disconnect();
      if (section3) section3Observer.disconnect();
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <div style={popupStyle}>
          <div style={cardStyle}>
            <h2 style={popupHeadingStyle}>Embark on a Heartfelt Journey</h2>
            <p style={popupTextStyle}>
              <FaDesktop style={iconStyle} /> Best experienced on desktop. <br />
              <FaHeadphones style={iconStyle} /> Use earphones for an immersive experience.
            </p>
            <button onClick={handleStart} style={buttonStyle}>Let's Begin</button>
          </div>
        </div>
      )}

      <Parallax pages={7}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="rain">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="rain-drop" style={{ left: `${Math.random() * 100}%`, '--i': i }}></div>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          id="section-2"
          offset={1}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${hill})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="rain">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="rain-drop" style={{ left: `${Math.random() * 100}%`, '--i': i }}></div>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          id="section-3"
          offset={2}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="rain">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="rain-drop" style={{ left: `${Math.random() * 100}%`, '--i': i }}></div>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          factor={1}
          style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}
        >
          <Preview/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4}
          speed={0}
          style={{
            backgroundColor:'white', color:'white', textAlign: 'center'
          }}
        >
          <Slider/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={5}
          speed={0}
          style={{
            backgroundColor:'black', color:'white', textAlign: 'center'
          }}
        >
          <Sorry/>
        </ParallaxLayer>

        <ParallaxLayer
        offset={6}
        speed={0}
        
        >
          <Playerv/>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.1 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} alt="Cat" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.15}>
          <h2>I'm SORRY, SANZIDA</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={2}>
          <h2>Please, forgive me!</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={1.5}
        >
          <h3>ACCEPT THIS HEARTFELT APOLOGY, PLEASE!!!</h3>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

// Inline styles for popup and button
const popupStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  padding: '30px',
  borderRadius: '12px',
  textAlign: 'center',
  zIndex: 1000,
  boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.2)',
};

const cardStyle = {
  backgroundColor: '#282828',
  padding: '20px',
  borderRadius: '10px',
};

const popupHeadingStyle = {
  fontSize: '24px',
  color: '#FFD700',
  marginBottom: '15px',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
};

const popupTextStyle = {
  color: '#fff',
  fontSize: '16px',
  marginBottom: '20px',
  lineHeight: '1.5',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '12px 25px',
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: '#FFD700',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.3)',
};




const iconStyle = {
  marginRight: '8px',
  verticalAlign: 'middle',
};

export default App;
