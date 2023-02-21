import './components/css/index.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Buttons from './components/buttons';
import Inputs from './components/inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempratureAndDetails from './components/TempratureAndDetails';

function App() {
  return (
    <section className='WeatherAPP bg-black h-full w-full text-white'>
      <Buttons />
      <Inputs />

      <TimeAndLocation />
      <TempratureAndDetails />
    </section>
  );
}

export default App;
