import React, { useState, useContext } from 'react';


export const StateContext = React.createContext();


export function useStateContext() {
  return useContext(StateContext);
}


export function HBOProvider({ children }) {
  const [user, setUser] = useState('');
  const defaultUserImg = 'https://www.loveyourdog.com/wp-content/uploads/2019/08/Bolognese-Puppy-Playing-in-Grass.jpg'
  //change the user
  const createUserAction = (e) => {
    setUser(e.target.value)
    console.log(user);
  }


  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg
      }}
    >
      {children}
    </StateContext.Provider>
  )
}




