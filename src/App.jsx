import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MotionWrapper from "./components/MotionWraper";
import './style.scss';

function App() {
    const location = useLocation(); 

    return (
        <div className="app">
            <div className="container">
                <Navbar />
                <MotionWrapper location={location}>
                    <Outlet />
                </MotionWrapper>
                <Footer />
            </div>
        </div>
    );
}

export default App;