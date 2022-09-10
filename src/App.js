import { Resizable } from 're-resizable';
import './App.css';
import Table from './Components/Table';
import Counts from './Components/Counts';
import Buttons from './Components/Buttons';

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <div className="flex flex-row w-screen">
        <Resizable defaultSize={{ width: '50vw', height: '50vh' }} style={style}>
          <Table />
        </Resizable>
        <div className='w-[100%] h-full' style={style}>
          <Buttons />
        </div>
      </div>
      <div className='w-[100%] h-full' style={style}>
        <Counts />
      </div>
    </div>
  );
}

export default App;
