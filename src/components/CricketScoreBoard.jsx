import { useState, useEffect } from "react";

function CricketScoreBoard() {
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);  

  const addRuns = (runs) => {
    setScore(score + runs);
    setBalls(balls + 1);  
  };

  const addWicket = () => {
    // cricket has max 10 wickets in an innings
    setWickets((prev) => (prev < 10 ? prev + 1 : prev));
  };

    useEffect(() =>  {        
             if (balls >= 6) {
                setOvers(overs + 1);
                setBalls(0);
            } 
        }, [balls]);
    
  return (
    <>  
          <h2>🏏 Cricket Score Board</h2>
          <h3>  Score: {score} </h3>
          <h3>  Wickets: {wickets}</h3>
          <h3>  Balls:  {balls} </h3>
          <h3>  Overs: {overs} </h3>
        
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => addRuns(0)}>+0 Run</button>
                <button onClick={() => addRuns(1)}>+1 Run</button>
                <button onClick={() => addRuns(2)}>+2 Runs</button>
                <button onClick={() => addRuns(3)}>+3 Runs</button>
                <button onClick={() => addRuns(4)}>+4 Run</button>
                <button onClick={() => addRuns(5)}>+5 Runs</button>
                <button onClick={() => addRuns(6)}>+6 Runs</button>
                <button onClick={() => addRuns(7)}>+7 Run</button>
                <button style = {{ background : "red"}} onClick={addWicket}>Wicket</button>
            </div>
        </>
  );
}

export default CricketScoreBoard