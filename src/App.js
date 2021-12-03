import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="antialiased w-full text-gray-700 px-1">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
