const Players = ({name,score}) => {
    return (
      <div className="man">
        <h1>Team:{name}</h1>
        <p>Score:{score}</p>
      </div>
    );
  };
  
  export default Players;