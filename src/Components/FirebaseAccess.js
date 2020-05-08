import React, {useEffect, useState } from 'react';
import config from '../config.js'
const firebase = require('firebase')


export const FirebaseAccess = () => {
    const [data, setData] = useState([])
    const [shouldRender, setShouldRender] = useState(true)
    const sample = ["hi", "hello", "how are you"]
  
    useEffect( () => {
      if (!firebase.apps.length) {
        firebase.initializeApp(config)
      }
      
      //get a reference to the database
      let ref = firebase.database().ref('data')
  
      //retrieve its data
      ref.on('value', snapshot => {
          //this is your call back function
          //state will be a JSON object after this
          //set your apps state to contain this data however you like
          const state = snapshot.val()
          //since i use react 16, i set my state like this
          //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
          setShouldRender(!shouldRender)
          setData(state)
      })
    }, [shouldRender])
  
  
    return(
      <div>
          <p>{data}</p> 
          {sample.map((s, index) => (
            <p>
              {s}
            </p>
          ))}
      </div>
    )
  }
  

  export default FirebaseAccess;