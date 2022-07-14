import './style.scss'
import './Dropdown'
import './Ripples'

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