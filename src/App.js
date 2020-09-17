import React from 'react';
import './App.css';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import ProgressBar from "./progress-bar";


const testData = [
 
  { bgcolor: "#ef6c00", completed: 53 },
];


function clickMe(){
  alert('Thank you For your Rating!🍿')
}

function Button(){
  return(
    <button onClick={clickMe} className="button">
        Submit
    </button>
  )
}

const ratingChanged = (newRating) => {
  console.log(newRating);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Rate your  <b className="company">NDIS</b> Service Provider
        </p>
        <form>
                <label>
                  <p>
                   Invoice Number: #111242 From <b className="company">Chiropractic Focus</b>
                  </p>
                </label>
        </form>

        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  

        <form>
                <label>
                  please leave a little comment here🙂
                  <input type="text" name="name" />
                </label>
        </form>
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
        <form>
                <label>
                 Compare the Local provider  
                  <input type="text" name="name" />
                </label>
                <input type="submit" value="Check provider" />
        </form>
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
        <p></p>
        <Button/>
        <div>
        {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      </div>
      </header>

    </div>
  );
}

export default App;
