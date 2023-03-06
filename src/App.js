import React,{useState} from "react";
import FormInput from "./components/Form/FormInput";
import Navbar from "./components/Navbar";
// import Result from "./components/Result/Result";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [Data, setData] = useState({});
  return (
    <div>
      <Navbar Data={Data}/>
      <FormInput setData={(item)=>{return setData(item)}} Data={Data}/>

    </div>
  );
}

export default App;
