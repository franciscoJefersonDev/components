import './style.scss'
import './ButtonAnimated'
import './Ripples'
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <button class="button-animated ripples">
    <ion-icon name="add"></ion-icon>
  </button>
`