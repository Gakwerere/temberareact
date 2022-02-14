import { useEffect, useState } from 'react';
import './App.css';
import MainRouter from './Router';

function App() {
  const [datas, setData] = useState({});

  useEffect(() => {  //component 
     fetch ("https://church-api.vercel.app/api/attendeese")
      .then(res => res.json())
      .then(a => {
        setData(a)
      }).catch(err => console.log(err))
  }, [])
  return (
          <div className="App">
                <MainRouter/>
                <h1>Tembera React</h1>
                {/* <span>{datas.attendeese?.map((item, idx) => {
                  return (<h6 key={idx}>{item.phone}</h6>)
                })}</span> */}
          </div>
  );
}

export default App;
