import logo from './logo.svg';
import './App.css';
import DefaultLayout from './Layout';

import Question from './component/english/question';

function App() {
  
  return (
    <div className="App">
      <DefaultLayout >
        <Question examId={1}/>
      </DefaultLayout>
    </div>
  );
}

export default App;
