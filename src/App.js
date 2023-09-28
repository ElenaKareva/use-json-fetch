import './App.css';
import Success from "./components/Success";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
    return (
        <>
            <Loading url={' http://localhost:7070/loading'}/>
            <Success url={'http://localhost:7070/data'}/>
            <Error url={'http://localhost:7070/error'}/>
        </>
    )
}

export default App;