import {useState} from 'react';
import Form from './Form';
import CollagePreview from './CollagePreview';

function App() {

  const [url, setUrl] = useState("");

  return (
    <>
     <Form handleClick={setUrl}/> 
     <CollagePreview url={url}/>
    </>
  );
} 

export default App;
