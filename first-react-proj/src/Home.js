import { useState } from 'react';

function Home() {
    const title = "Welcome to my page";
    const [user, setUser] = useState("Michael");
    
    const handleClick = () => {
      console.log("I was clicked");
    };

    const handleClickAgain = (name) => {
      console.log("Hello " + name);
    };

    const handleUpdateName = (name) => {
      const inputField = document.querySelector("#textArea");
      name = inputField.value;
      setUser(name);
    };

    return (
      <div className="home">
        <h1>{ title }</h1>
        <button onClick={handleClick}>Click me</button>
        <button onClick={ () => {
          handleClickAgain(user);
        } }>Click me again</button>
        <br/>
        <p>{ user }</p>
        <input id="textArea"/>
        <button onClick={ () => {
          handleUpdateName(user);
        } }>Update Name</button>
      </div>
    );
}

export default Home;