
import './index.css';
import NavigationBar from './navigationbar'
import SidebarIcon from './sidebar';
import Member from './members';
import home from './icons/home.jpg'
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <SidebarIcon/>
      <h1>Staff directory</h1>
      <div className='collectionofmember'>
      <Member profile={home}/>
      <Member/>
      <Member/>
      <Member/>
      <Member/></div>
    </div>
  );
}

export default App;
