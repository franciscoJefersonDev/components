import './styles.scss';
import './Ripples';
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <button class="turn-hidden wk-btn ripples">
    Hidden
    <label class="wk-switch">
      <input type="checkbox" class="wk-switch__input input-turn-hidden" checked>
    <span class="wk-switch__slider"></span>
  </label>
  </button>
  <button class="wk-btn ripples btn-demo-rp">
    <ion-icon name="add"></ion-icon>
  </button>
`

const turnHidden = document.querySelector<HTMLButtonElement>('.turn-hidden')!
const inputTurnHidden = document.querySelector<HTMLInputElement>('.input-turn-hidden')!
const btnDemoRp = document.querySelector<HTMLButtonElement>('.btn-demo-rp')!


turnHidden.addEventListener('click', () => {
  inputTurnHidden.checked = !inputTurnHidden.checked
  turnHiddenF()
})

const turnHiddenF = () => {
  if(inputTurnHidden.checked) {
    btnDemoRp.style.overflow = 'hidden'
  } else {
    btnDemoRp.style.overflow = 'initial'
  }
}

turnHiddenF()