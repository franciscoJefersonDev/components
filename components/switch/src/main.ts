import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <label class="switch">
    Toggle
    <input type="checkbox" class="switch__input">
    <span class="switch__slider"></span>
  </label>
`