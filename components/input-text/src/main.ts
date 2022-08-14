import './style.scss';
import './input-text.scss';

const component = `
  <input type="text" placeholder="type text here..." class="wk-input-text rounded text-left"/>
`

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = component