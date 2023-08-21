import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='min-h-screen bg-[#131517] '>
      <div className='bg-[#131517] 1.5xl:mx-auto 1.5xl:w-[1440px]'>
        <Header />
        <div className='flex flex-wrap'>
          <div className='hidden border-r border-[#23262F] px-7 xl:block xl:w-3/12 '>
            <Sidebar />
          </div>
          <div className='w-full xl:w-9/12 '>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
