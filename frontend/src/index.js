import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';
import App from './App.js';
import About from './About.js';

const myElement = (
        <ul>
            <h1>List of Fruits</h1>
            <li>Bananas</li>
            <li>Orange</li>
            <li>Bayabas</li>
        </ul>
       );

const myElement1 = (
    <div>
        <h1>What is your favorite sports?</h1>
        <p>Basketball</p> 
        <p>Soccer</p> 
        <p>Table Tennis</p> 
    </div>);

const myElement2 = <h1 className='rojreAcademy'>Rojre Academy is the pioneering tech stack in Naval Biliran Province!</h1>;

const calculator = (x,y) =>{
    
    return <h1>{(x) > (y) ? `${x} is greater than ${y}`:`${x} is less than ${y}`}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const add = ReactDOM.createRoot(document.getElementById('calc'));
add.render(calculator(40,500));

const rojre = ReactDOM.createRoot(document.getElementById('rojre'));
rojre.render(myElement);

const rojre1 = ReactDOM.createRoot(document.getElementById('rojre1'));
rojre1.render(myElement1);

const rojre2 = ReactDOM.createRoot(document.getElementById('rojre2'));
rojre2.render(myElement2);

const car = ReactDOM.createRoot(document.getElementById('car'));
car.render(<Car color="red"/>)

const about = ReactDOM.createRoot(document.getElementById('about'));
about.render(<About tech="AI"/>);




