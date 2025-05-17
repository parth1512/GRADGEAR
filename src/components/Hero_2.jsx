import React, { useState } from "react";
import "./styles/Hero.css";


export const Hero_2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [slide, setSlide] = useState(1);
  const [budget, setBudget] = useState(50000); // Default budget value

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSlide(1); // Reset to first slide on close
    setBudget(50000); // Reset budget as well
  };

  // The tags array (kept outside for reuse)
  const tags = [
    "gaming", "research", "graphic designing", "entertainment", "programming",
    "CAD", "simulation", "architecture", "ui/ux design", "data analyst",
    "data scientist", "study", "trading", "movie streaming", "content creation",
    "3D design", "AI ML training", "business", "productivity", "cybersecurity",
    "writing", "health care", "medical", "AR VR", "IoT", "conference meetings",
    "ethical hacking", "other",
  ];

  return (
    <>
      <div className="Hero_2">
        <h1 className="Title_txt">
          START YOUR JOURNEY OF THIS{" "}
          <span className="Laptop_txt_color">SELECTION</span> NOW
        </h1>
      </div>

      <div className="Hero_2">
        <p className="Sub_txt">
          Tailored recommendations based on your needs, budget, and goals.
        </p>
      </div>

      <br />
      <br />

      <div className="Hero_2">
        <button className="START_NOW_BUTTON" onClick={handleButtonClick}>
          START NOW
        </button>
      </div>

      <div className="Hero_2">
        <a href="#added" className="Sub_txt2">
          already added to wishlist
        </a>
      </div>
      
      <div className="pop">
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <button className="close-button" onClick={closePopup}>
                &times;
              </button>
              {/* Slide 1: Use Case */}
              {slide === 1 && (
                <>
                  <div className="pop_and_text">
                    <div className="pop">
                      <h1 className="popup-title1">GETTING </h1>
                      <h1 className="popup-title2">STARTED </h1>
                    </div>
                    <div className="popup-description">
                      <p className="popup-description_disign">
                        Answer a few quick questions, and we'll recommend the best laptop
                        for you. <span className="Laptop_txt_color">This will only take a minute!</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="popup-subtitle_container">
                    <h2 className="popup-subtitle">Use case / purpose for laptop</h2>
                  </div>
                  <div className="popup-tags">
                    {tags.map((tag) => (
                      <button className="tag" key={tag}>
                        {tag}
                      </button>
                    ))}
                  </div>
                  
                  <button className="next-button" onClick={() => setSlide(2)}>
                    NEXT &rarr;
                  </button>
                  <div className="Progress_bar">
                    <h1 className="dots"><span className="col">.</span>......</h1>
                  </div>
                 
                 
                </>
              )}
              {/* Slide 2: Budget Slider */}
              {slide === 2 && (
                <>
                  <div className="pop_and_text">
                    <div className="pop">
                    <h1 className="popup-title1">GETTING </h1>
                    <h1 className="popup-title2">STARTED </h1>
                    </div>
                    <div className="popup-description">
                    <p className="popup-description_disign">
                        Answer a few quick questions, and we'll recommend the best laptop
                        for you. <span className="Laptop_txt_color">This will only take a minute!</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="popup-subtitle_container">
                    <h2 className="popup-subtitle">Budget (INR)</h2>
                  </div>
                  <div className="budget-slider-container" style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <input
                      type="range"
                      min={20000}
                      max={500000}
                      step={1000}
                      value={budget}
                      onChange={e => setBudget(Number(e.target.value))}
                      style={{ width: '80%' }}
                    />
                    <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
                      ₹{budget.toLocaleString()}
                    </div>
                  </div>
                  <div className="prog_next">
                  <button className="next-button" onClick={() => setSlide(3)}>
                  NEXT &rarr;
                  </button>
                  <div className="Progress_bar">
                    <h1 className="dots"><span className="col">..</span>.....</h1>
                  </div>
                  </div>

                  
                </>
              )}
              {/* Slide 3: Budget Slider */}
              {slide === 3 && (
                <>
                  <div className="pop_and_text">
                    <div className="pop">
                    <h1 className="popup-title1">GETTING </h1>
                    <h1 className="popup-title2">STARTED </h1>
                    </div>
                    <div className="popup-description">
                    <p className="popup-description_disign">
                        Answer a few quick questions, and we'll recommend the best laptop
                        for you. <span className="Laptop_txt_color">This will only take a minute!</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="popup-subtitle_container">
                    <h2 className="popup-subtitle">How frequently you take your laptop when you travel?</h2>
                  </div>
                  <div className="options">
                    <button className="option-button"><p className="But_font">ALWAYS</p></button>
                    <button className="option-button"><p className="But_font">SOMETIMES</p></button>
                    <button className="option-button"><p className="But_font">RARELY</p></button>
                    <button className="option-button"><p className="But_font">NEVER</p></button>
                  </div>
                  
                  <div className="prog_next">
                  <button className="next-button" onClick={() => setSlide(4)}>
                  NEXT &rarr;
                  </button>
                  <div className="Progress_bar">
                    <h1 className="dots"><span className="col">...</span>....</h1>
                  </div>
                  </div>

                  
                </>
              )}
              {/* Slide 4: Budget Slider */}
              {slide === 4 && (
                <>
                  <div className="pop_and_text">
                    <div className="pop">
                    <h1 className="popup-title1">GETTING </h1>
                    <h1 className="popup-title2">STARTED </h1>
                    </div>
                    <div className="popup-description">
                    <p className="popup-description_disign">
                        Answer a few quick questions, and we'll recommend the best laptop
                        for you. <span className="Laptop_txt_color">This will only take a minute!</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="popup-subtitle_container">
                    <h2 className="popup-subtitle">Choose your display type </h2>
                  </div>
                  <div className="options">
                    <button className="option-button"><p className="But_font">COMPACT 13-14inches</p></button>
                    <button className="option-button"><p className="But_font">STANDARD 15inches</p></button>
                    <button className="option-button"><p className="But_font">LARGE 16-17inches</p></button>
                    <button className="option-button"><p className="But_font">4k</p></button>
                    <button className="option-button"><p className="But_font">QHD</p></button>
                    <button className="option-button"><p className="But_font">FHD</p></button>
                  </div>
                  
                  <div className="prog_next">
                  <button className="next-button" onClick={() => setSlide(5)}>
                  NEXT &rarr;
                  </button>
                  <div className="Progress_bar">
                    <h1 className="dots"><span className="col">....</span>...</h1>
                  </div>
                  </div>

                  
                </>
              )}

              {/* Slide 5: Budget Slider */}
              {slide === 5 && (
                <>
                  <div className="pop_and_text">
                    <div className="pop">
                    <h1 className="popup-title1">GETTING </h1>
                    <h1 className="popup-title2">STARTED </h1>
                    </div>
                    <div className="popup-description">
                    <p className="popup-description_disign">
                        Answer a few quick questions, and we'll recommend the best laptop
                        for you. <span className="Laptop_txt_color">This will only take a minute!</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="popup-subtitle_container">
                    <h2 className="popup-subtitle">How important is battery life for you ?</h2>
                  </div>
                  <div className="options">
                    <button className="option-button"><p className="But_font">VERY IMPORTANT (8+ hours)</p></button>
                    <button className="option-button"><p className="But_font">MODRATE (3-4 hours)</p></button>
                    <button className="option-button"><p className="But_font">NOT A PRIORITY</p></button>
                    <button className="option-button"><p className="But_font">FAST CHARGING IS PRIORRITY</p></button>
                    
                  </div>
                  
                  <div className="prog_next">
                  <button className="next-button" onClick={() => setSlide(6)}>
                  NEXT &rarr;
                  </button>
                  <div className="Progress_bar">
                    <h1 className="dots"><span className="col">.....</span>..</h1>
                  </div>
                  </div>

                  
                </>
              )}

              {/* Slide 6: Budget Slider */}
              {slide === 6 && (
                <>
                  <div className="pop_and_text">
                    <div className="pop">
                    <h1 className="popup-title1">GETTING </h1>
                    <h1 className="popup-title2">STARTED </h1>
                    </div>
                    <div className="popup-description">
                    <p className="popup-description_disign">
                        Answer a few quick questions, and we'll recommend the best laptop
                        for you. <span className="Laptop_txt_color">This will only take a minute!</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="popup-subtitle_container">
                    <h2 className="popup-subtitle">Do you prefer specific OS?</h2>
                  </div>
                  <div className="options">
                    <button className="option-button"><p className="But_font">WINDOWS</p></button>
                    <button className="option-button"><p className="But_font">UBANTU</p></button>
                    <button className="option-button"><p className="But_font">MAC OS</p></button>
                    <button className="option-button"><p className="But_font">DOS</p></button>
                    
                  </div>
                  
                  <div className="prog_next">
                  <button className="next-button" onClick={() => setSlide(7)}>
                  NEXT &rarr;
                  </button>
                  <div className="Progress_bar">
                    <h1 className="dots"><span className="col">......</span>.</h1>
                  </div>
                  </div>

                  
                </>
              )}

              {/* Slide 7: Budget Slider */}
              {slide === 7 && (
                <>
                  <div className="pop_and_text">
                    <div className="pop">
                    <h1 className="popup-title1">GETTING </h1>
                    <h1 className="popup-title2">STARTED </h1>
                    </div>
                    <div className="popup-description">
                    <p className="popup-description_disign">
                        Answer a few quick questions, and we'll recommend the best laptop
                        for you. <span className="Laptop_txt_color">This will only take a minute!</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="popup-subtitle_container">
                    <h2 className="popup-subtitle">Do you require any specific feature</h2>
                  </div>
                  <div className="options">
                    <button className="option-button"><p className="But_font">TOUCHSCREEN</p></button>
                    <button className="option-button"><p className="But_font">DUAL DISPLAY</p></button>
                    <button className="option-button"><p className="But_font">HIGH PERFORMANCE GPU</p></button>
                    
                    
                  </div>
                  
                  <div className="prog_next">
                  <button className="next-button" onClick={closePopup}>
                  FINISH &rarr;
                  </button>
                  <div className="Progress_bar">
                    <h1 className="dots"><span className="col">.......</span></h1>
                  </div>
                  </div>

                  
                </>
              )}

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero_2;
