import Search from './compnents/Search'
import Notice from './compnents/Notice/Notice'
import Geolocation from './compnents/Geolocation'
import Tempd from './compnents/Tempd'
import Forecast from './compnents/Forecast'


function App() {

  return (
    <div className='mx-auto py-5 mt-28 px-32  max-w-screen-md  bg-gradient-to-br flex-wrap 
     from-cyan-600 to-blue-800 h-fit shadow-xl shadow-gray-600 '>

      <Notice />
      <Search />
      <Geolocation />
      <Tempd />
    </div>

  )
}

export default App
