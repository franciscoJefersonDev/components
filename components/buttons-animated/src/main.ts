import './styles.scss';
import './ButtonsAnimated';
import './Ripples';
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <button class="wk-btn wk-btn-anim ripples">
    <ion-icon name="add"></ion-icon>
  </button>
`