import './App.css'
import ButtonComponent from './components/ButtonComponent'
import Greeting from './components/Greeting'
import Greeting2 from './components/Greeting2'
import ListDisplay from './components/ListDisplay'
import UserProfile from './components/UserProfile'

function App() {

  const fruits = ["apple","orange","mango"]

  const user = {
    name : "Ganesh",
    age : 25,
    city : "pune"
  }

  function handleAlert(){
    alert("you clicked the button")
  }

  return (
    <>
      <Greeting username="Ramesh" />
      <Greeting2 username="Suresh" />
      <ListDisplay list={fruits} ></ListDisplay>
      <UserProfile userProfile = {user}></UserProfile>
      <ButtonComponent onClickHandler={handleAlert}></ButtonComponent>
    </>
  )
}

export default App
