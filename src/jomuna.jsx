

export default function Jomuna({ name, price }) {
    return (
      <div className="man">
        <h1>Fridge Name: {name}</h1>
        <p>
          Price: {price > 40000 ? "Not enough" : `${price}`}
        </p>
      </div>
    );
  }
  
  
  