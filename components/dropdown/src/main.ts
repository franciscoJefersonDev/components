import './style.scss'
import Dropdown from './Dropdown'
import Ripples from './Ripples'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="dropdown">
    <button class="dropdown__button ripples">
      <ion-icon name="ellipsis-vertical"></ion-icon>
    </button>
    <ul class="dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
`

const ripples: any = document.querySelectorAll<HTMLElement>('.ripples')!
const dropdowns: any = document.querySelectorAll<HTMLDivElement>('.dropdown')!
new Dropdown(dropdowns)
new Ripples(ripples)