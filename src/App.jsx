import Marketing from './Components/Marketing/Marketing'
import News from './Components/News/News'
import Search from './Components/Search/Search'
import BlockComponent from './Components/BlockComponent/BlockComponent'

import './App.css'

function App() {
 return <div className="app">
  <div className='topContainer'>
    <News />
    <Marketing />
  </div>
  <Search />
  <Marketing />
  <div className='flex'>
    <BlockComponent title={'Погода'} ></BlockComponent>
    <BlockComponent title={'Карта Германии'} ></BlockComponent>
    <BlockComponent title={'Эфир'} ></BlockComponent>
    <BlockComponent title={'Посещаемое'} ></BlockComponent>
    <BlockComponent title={'Телепрограмма'} ></BlockComponent>
  </div>
 </div>
}

export default App
