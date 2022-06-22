import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
  );

  return (
    <div>
      <h1>My Dog Log</h1>
      <div>
        <img src={imageUrl} alt="A random dog" />
      </div>
    </div>
  );
}

export default App;
