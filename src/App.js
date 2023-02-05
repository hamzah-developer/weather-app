import './components/css/index.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Buttons from './components/buttons';
import Inputs from './components/inputs';

function App() {
  return (
    <section className='WeatherAPP bg-black h-full w-full text-white'>
      <Buttons />
      <Inputs />
    </section>
  );
}

export default App;
