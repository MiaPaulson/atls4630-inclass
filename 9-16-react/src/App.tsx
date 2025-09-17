import './App.css';
import Button from "./Button";
import CountButton from "./CountButton";
import MyList from "./MyList";

function App() {
  return(
    // need to be in a div! OR fragment (empty wrapper): <></>
    // to include JS, put inside {} (like the comment down below)
    <div>
      <h1>Welcome to React Fundamentals 1</h1>
      {/* a little different from HTML syntax below! "self closing" almost*/}
      <Button isSpecial={true} text="Button 1" />
      <Button isSpecial={false} text="Button 2"/>
      <CountButton isSpecial={false} />

      <MyList />
    </div>
  )
  
}

export default App
