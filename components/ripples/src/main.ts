import './style.scss'
import Ripples from './Ripples'
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <button class="ripples">Click-me</button>
`

const elements = document.querySelectorAll<HTMLElement>('.ripples'!)
new Ripples(elements)