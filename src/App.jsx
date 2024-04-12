import Headers from "./Components/Header/Headers";
import Loader from "./Components/General/Loader";
import Main from "./Components/Main/Main";
import OurTeam from "./Components/OurTeam/OurTeam";
import BackToTheTop from "./Components/General/BackToTheTop";
import EventList from "./Components/EventList/EventList";
import Form from "./Components/Form/Form";
import deplog from './assets/img/logo/dep.svg';

function App() {
  return (
    <>
    <div className="images-nav">
      <div className="background-img-nav">
      <img src={deplog} alt="" />
      </div>
    </div>
      {/* <Headers />? */}
      {/* <Loader /> */}
      <Main />
      <EventList />
      <BackToTheTop />
      <Form />
    </>
  );
}

export default App;
