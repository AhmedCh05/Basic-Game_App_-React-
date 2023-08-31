/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import AnimalQuestions from '../assets/questions/animalGame';

const getRandomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * AnimalQuestions.length);
  return AnimalQuestions[randomIndex];
};

const AnimalGame = () => {
  const [AnimalChoice, setAnimalChoice] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [displayAnimal, setDisplayAnimal] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  const checkAnimalAnswer = () => {
    if (AnimalChoice === displayAnimal.answer) {

      setModalMessage("Correct!");
      setDisplayAnimal(getRandomAnimal());

    } else {
      setModalMessage("Wrong!..Try Guessing Again");
    }
    setToggleModal(true);
    setAnimalChoice(null);
    
  };

  useEffect(() => {
    if (AnimalChoice !== null) {
      checkAnimalAnswer();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AnimalChoice]);

  useEffect(() => {
    if (displayAnimal === null) {
      setDisplayAnimal(getRandomAnimal())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleButtonClick = (choice) => {
    setAnimalChoice(choice);

  };

  useEffect(() => {
    // Reset AnimalChoice and close modal when displayAnimal changes
    setAnimalChoice(null);
  }, [displayAnimal]);

  return (
    <div
      style={{
        maxWidth: "390px",
        padding: "1rem",
        backgroundColor: "black",
        borderRadius: "0.5rem",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Animal Guess Game
      </div>
      <div
        style={{
          marginBottom: "1rem",
        }}
      >
        {displayAnimal?.question}
      </div>

      <img
        style={{
          width: "35%",
          marginBottom: "1rem",
        }}
        src={displayAnimal?.img}
        alt="Question"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5rem",
            width: "50%",
          }}
        >
        <label style={{alignContent:"center"}}>Cat</label>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.2rem",
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
              width: "75%",
            }}
            onClick={() => handleButtonClick("cat")}
            disabled={AnimalChoice !== null}
          ><img style={{height:"inherit",width:"inherit"}} src={displayAnimal?.choiceA}></img>
          </button>
          <label>Dog</label>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.2rem",
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
              width: "75%",
            }}
            onClick={() => handleButtonClick("dog")}
            disabled={AnimalChoice !== null}
          ><img style={{height:"inherit",width:"inherit"}} src={displayAnimal?.choiceB}></img>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <label>Horse</label>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.2rem",
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
              width: "75%",
            }}
            onClick={() => handleButtonClick("horse")}
            disabled={AnimalChoice !== null}
          ><img style={{height:"inherit",width:"inherit"}} src={displayAnimal?.choiceC}></img>
          </button>
          <label style={{alignContent:"center"}}>Cow</label>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.2rem",
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
              width: "75%",
            }}
            onClick={() => handleButtonClick("cow")}
            disabled={AnimalChoice !== null}
          ><img style={{height:"inherit",width:"inherit"}} src={displayAnimal?.choiceD}></img>
          </button>
        </div>
      </div>
      {toggleModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9999",
          }}
        >
          <div
            style={{
              background: "grey",
              color: "white",
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{modalMessage}</h3>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                border: "none",
                cursor: "pointer",
                marginTop: "1rem",
              }}
              onClick={() => setToggleModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalGame;
