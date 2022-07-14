import './style.scss';
import './Ripples';
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <button class="ripples">
    <ion-icon name="add"></ion-icon>
  </button>
`