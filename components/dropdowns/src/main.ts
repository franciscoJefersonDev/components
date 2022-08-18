import './styles.scss';
import './Dropdowns';
import './Ripples';
const app = document.querySelector<HTMLDivElement>('#app')!
const compoenent = `
  <div class="wk-dropdown">
    <button class="wk-dropdown__active-button wk-btn navbar ripples">
      <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
    </button>
    <ul class="wk-dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
  <div class="wk-dropdown">
    <button class="wk-dropdown__active-button wk-btn navbar ripples">
      <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
    </button>
    <ul class="wk-dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
  <div class="wk-dropdown">
    <button class="wk-dropdown__active-button wk-btn navbar ripples">
      <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
    </button>
    <ul class="wk-dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
  <div class="wk-dropdown">
    <button class="wk-dropdown__active-button wk-btn navbar ripples">
      <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
    </button>
    <ul class="wk-dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
  <h3>Adapted for all positions in screen</h3>
`

/*
     */


app.innerHTML = compoenent