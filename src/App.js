import Question2 from "./components/useState";
import AxiosFetch from "./components/AxiosFetch";
import Question3 from "./components/useEffect";
import Parent from "./components/Parent";
import Counter from "./components/useReducer";
function App() {
  return (
    <div className="App">
<AxiosFetch/>
  <Question2/>
  <Question3/>
  <Counter/>
  <Parent/>

    </div>
  );
}

export default App;