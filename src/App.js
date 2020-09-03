import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import source from "./posts/2020-09-02.md"; 
import './App.css';

// const source = '# This is a header\n\nAnd this is a paragraph'
function App() {
  const [data, setData] = useState({post:null})
  useEffect(() => {
    fetch(source)
      .then(res => res.text())
      .then(post => {
        console.log("post", post)
        setData((state) => ({ ...state, post }))
      })
      .catch((err) => console.error(err));
  }, [])
  return (
    <>
    <div className="App">
      <ReactMarkdown source={data.post} />
    </div>
    </>
  );
}

export default App;
