import React, { useState, useEffect } from 'react'
// axios is just anothe API we can use to make AJAX calls
// import axios from 'axios'

import fetchGIF from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { gifURL: state.reducer1.gifURL}
}

const Giphy = (props) => {
  // const [gifURL, setGifURL] = useState('')

  // useEffect is a React hook we have to import
  // useEffect takes two arguments
  // first argument is the function, second argument is the dependency array
  // useEffect is running in the background listening to component lifecycles, whether we created/mounted, and updated
  useEffect(() => {
    console.log("Hey we mounted our Giphy component")

    props.fetchGIF()

    // try/catch and asyc/await
    // try/catch - tell our code to run the block of code and not break our application
    // const fetchGIF = async () => {
    //   try {
    //     // ajax call
    //     // you can only use await inside async functions
    //     // axios syntax with http request
    //     // in axios you no longer have to use json() to make the response readable becase does that for us under the hood - thank you axios

    //     // await is replacing .then() aka our thenables
    //     const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9')
        
    //     console.log('this is the data we got back from giphy api', response)
    //     setGifURL(response.data.data.fixed_height_downsampled_url)
    //    }catch(err) {
    //     console.log(err)
    //   }
    // }
    
    // don't forget to call your async function or you will not have data - sad face
    // fetchGIF()

    // empty dependency array tells useEffect to only run once when the component mounts/render
  }, [])

  // function expression
  // const randomGIF = () => {
  //   fetch('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9')
  //     .then(response => response.json())
  //     // gif here holds our data that was turned from json()
  //     .then(gif => setGifURL(gif.data.fixed_height_downsampled_url))
  //     .catch(err => console.log(err))
  // }
  // data.fixed_height_downsampled_url

  return (
    <div>
      <h1>Random GIF</h1>
      <button>Random</button>
      <div>
        <img src={props.gifURL} alt="random gif" />
      </div>
    </div>
  );
};

// export default Giphy;
// () () - calls connect first to set up our props, the renders our Giphy component with our new props
export default connect(mapStateToProps, { fetchGIF })(Giphy)