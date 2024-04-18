import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Services} from "./layout/sections/services/Services";
import {Achievements} from "./layout/sections/achievements/Achievements";
import {Projects} from "./layout/sections/projects/Projects";
import {Experience} from "./layout/sections/experience/Experience";
import {Feedbacks} from "./layout/sections/feedbacks/Feedbacks";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Services/>
            <Achievements/>
            <Projects/>
            <Experience/>
            <Feedbacks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

