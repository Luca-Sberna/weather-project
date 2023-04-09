import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Aside = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameStarted, setGameStarted] = useState(false);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("epiClickerHighScore") || 0,
  );
  // Salviamo il nuovo punteggio più alto
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("epiClickerHighScore", score);
    }
  }, [score, highScore]);

  function startGame() {
    setScore(0);
    setTimeLeft(15);
    setGameOver(false);
    setGameStarted(true);

    // Decrementa il tempo rimanente ogni secondo
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    // Termina il gioco dopo 15 secondi
    setTimeout(() => {
      clearInterval(timer);
      setGameOver(true);
      setGameStarted(false);
    }, 15000);
  }

  // Funzione che viene chiamata quando l'utente clicca il bottone "Click me"
  function incrementScore() {
    if (gameStarted) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  return (
    <Container fluid className="py-4 bg">
      <Container className="border py-2 rounded-4 shadow">
        <h1 className="pb-3 mb-0">Epi Clicker Game</h1>
        <p className="">For Fight the Booring moment</p>
        <hr />
        {gameOver ? (
          <Row className="justify-content-end">
            <Col>
              <h2>Game over! Your score is {score}.</h2>
            </Col>
            <Col xs={12} className="text-end">
              <Button className="mb-4" onClick={startGame}>
                Play again
              </Button>
            </Col>
            <hr />
          </Row>
        ) : (
          <div>
            <p>Time left: {timeLeft} seconds</p>
            <p>Score: {score}</p>
            <Button onClick={incrementScore} disabled={!gameStarted}>
              Click me
            </Button>
            <hr />
          </div>
        )}
        <p className="py-2 fw-bold">
          How many times can you click the button in 15 seconds?
        </p>
        <p className="text-end fw-bold">high score: {highScore}</p>
        <Button onClick={startGame} disabled={gameStarted}>
          Start game
        </Button>
      </Container>
    </Container>
  );
};

export default Aside;
