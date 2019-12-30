// import '../css/index.css';
import 'index.scss';
// import 'index.html';
import basic from 'part1';
import axios from 'axios';
import '@babel/polyfill';
const arrowFun = () => 'ok';
const isOk = arrowFun();
console.log(isOk);

let api = 'https://randomuser.me/api/';
async function getData () {
  let res = await axios.get(api);
  return res;
}
getData().then(res => console.log('axios',res));

class Project {
  state = {
    content: 20
  }

  constructor () {
    document.querySelector('.title').addEventListener('click', this.check);
  }

  check = () => {
    console.log('this.state.content', this.state.content);
  }
}

window.onload = function () {
  new Project (123);
  console.log('jquery運作中',$('.title'));
}



basic();
