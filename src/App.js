import logo from './logo.svg';
import './App.css';
import DefaultLayout from './Layout';
import {MENU_ITEMS_SHARE} from './data/english';

function App() {

  return (
    <div className="App">
      <DefaultLayout items={MENU_ITEMS_SHARE}></DefaultLayout>
    </div>
  );
}

export default App;
