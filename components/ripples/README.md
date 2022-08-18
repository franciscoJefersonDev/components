# RIPPLES EFFECT

## HOW TO USE

### CONFIGURATION

#### JS/TS

> Recomended download the files localized in '/finish' in this repository in your application.

```javascript
import './Ripples.(js||ts)';
||
import { AddManualRipples } from './Ripples.(js||ts)';
const btnsRp = document.querySelector('...');
new AddManualRipples(btnsRp);
```

#### HTML

```html
<button class="ripples">Click-me</button>
```

#### CSS

```css
button {
  position: relative;
  overflow: hidden;
  --rp-color: 'your configuration';
  --rp-transition: 'your configuration';
}
```

### DEMO

#### <https://webkit-components-ui.netlify.app/ripples/dist>
