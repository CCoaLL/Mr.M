/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [titles, setTitles] = useState(['asdfasdf', 'asdfeqqqqqqqqqqqqqqq', 'pasdjfmq'])
  let [thumbsup, setThumbsup] = useState(0)
  let [modal, setModal] = useState(false)

  return (
    <div className='App'>
      <div className='nav'>
        <h4>Mr. M's Blog </h4>
      </div>

      { 
        titles.map( (t, i) => {
          return (
            <div className='list' key={i}>
              <h3 onClick={ () => { if(modal == false) { setModal(true) } else { setModal(false) } } }>{ t } <span onClick={ () => { setThumbsup(thumbsup+1) } }>👍</span> { thumbsup } </h3>
        <p>ewiafj hello jsdajfjewaiszd fhdehfasd eefdjsaz</p>
            </div>
          ) 
        })
      }

      {
        modal == true ? <Modal titles={ titles } setTitles={setTitles}></Modal> : null  
      }
    </div>
  );
}

let Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{ props.titles }</h4>
      <p>date</p>
      <p>sdkajfjeas jsjd fjisadjfoaeusdf jasodfa sdjifasidf i ewifaisdhacf jsdfd aejhadjd jfjfjf  fj sdjfj we dnf jsdhfasjjfj iojslidj ifs s.</p>
      <button onClick={ props.setTitles(['qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', 'b', 'w']) }>edit post</button>
    </div>
  )
}

export default App;