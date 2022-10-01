import { useState } from 'react';
import { Outlet, Link} from "react-router-dom";
import logo from './logo.png';

import './App.css'

export const App = () => {

  return (
      <div className="Main">
          <div className="header">
            <img src={logo} className="App-logo" alt="profile picture"/>
          </div>
          <div className="content">
            <p>
                Libro čitateľský klub vznikol zo záľuby v čítaní kníh. 
                Našou misiou je zoskupiť ľudí, ktorí obľubujú čítanie 
                a štúdium rôznorodej literatúry, o ktorej sa dá prirodzene 
                viesť diskusia. Každý kto sa v tomto živote naučil čítať, 
                dostal dar, ktorý by mohol neustále rozvíjať a tým naplniť 
                svoj intelektový potenciál. Budeme radi, ak sa k nám pridáš 
                ako podporovateľ/ka, alebo aj ako člen/ka v prípade, že sa 
                chceš podeliť o svoje myšlienky a stretnúť podobne 
                zmýšľajúcich čitateľov.
            </p>
          </div>
      </div>
  )
}