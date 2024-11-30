import Profile from "./components/Profile"
import Sidebar from "./components/Sidebar";



const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Sidebar/>
      <Profile/>
    </div>
  )
}

export default App