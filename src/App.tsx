import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage.tsx";


function App() {
    return (
        <Routes>
            <Route path="/" component={<HomePage/>}/>
        </Routes>
    )
}

export default App
