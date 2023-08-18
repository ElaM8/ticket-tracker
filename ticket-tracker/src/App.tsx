import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import employees from './data/team'
import Home from './components/Home/Home'
import TicketTracker from "./components/Ticket-Tracker/Ticket-Tracker";
import ProfileView from "./components/ProfileView/ProfileView"
import Nav from "./components/Nav/Nav";

const App = () => {

return (
  <>
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/home" element={<Home employees={employees}/>}/>
      <Route path="/ticket-tracker" element={<TicketTracker employees={employees}/>}></Route>
      <Route path="/profile/:empid" element={<ProfileView employees={employees}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;