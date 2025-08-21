import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuseElement = document.querySelector('#excuse')
  function GetRandomData(array) {
    const RandomData = Math.floor(Math.random()* array.length);
    return array[RandomData]
  }
  
  const who = ['El perro', 'Mi abuela', 'El cartero', 'Un pajaro'];
  const RandomWho = GetRandomData(who)
  const action = ['comio',  'orino', 'trituro', 'quebro'];
  const RandomAction = GetRandomData(action)
  const what = ['mi tarea', 'mi celular', 'el carro'];
  const RandomWhat = GetRandomData(what)
  const when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras me ejercitaba', 'durante mi almuerzo', 'cuando estaba rezando'];
  const RandomWhen = GetRandomData(when)

  const excuse = RandomWho + " " + RandomAction + " " + RandomWhat + " " + RandomWhen
  excuseElement.innerText = excuse 
};

