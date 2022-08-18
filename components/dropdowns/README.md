# DROPDOWNS

## HOW TO USE

### CONFIGURATION

#### JS/TS

> Recomended download the files localized in '/finish' in this repository in your application.

```javascript
import './Dropdowns.(js||ts)';
||
import { AddManualDropdowns } from './Dropdowns.(js||ts)';
const transition = 200
const dropdowns = document.querySelectorAll('...')
AddManualDropdowns(dropdowns, transition)
```

#### HTML

```html
<div class="wk-dropdown">
  <button class="wk-dropdown__active-button wk-btn navbar">
    <ion-icon name="more"></ion-icon>
  </button>
  <ul class="wk-dropdown__menu">
    <li>This is dropdown</li>
  </ul>
</div>
```
#### CSS/SCSS

```css
import './Dropdowns.css';
```

### DEMO

#### <https://webkit-components-ui.netlify.app/dropdowns/dist>