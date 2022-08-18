import './styles.scss';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <label class="wk-switch">
    <input type="checkbox" class="wk-switch__input">
    <span class="wk-switch__slider"></span>
  </label>
`