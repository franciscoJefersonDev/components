import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <label class="switch">
    <input type="checkbox" class="switch__input">
    <span class="switch__slider"></span>
  </label>
`