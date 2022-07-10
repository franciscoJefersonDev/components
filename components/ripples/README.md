# RIPPLES EFFECT

> ## "Life to web buttons"

# HOW TO USE

## IMPORT

### JS

```javascript
import Ripples from 'https://cdn.jsdelivr.net/gh/franciscoJefersonDev/components/components/finish/Ripples.js';
```

### TS

```typescript
import Ripples from 'https://cdn.jsdelivr.net/gh/franciscoJefersonDev/components/components/finish/Ripples.ts';
```

## CONFIGURATION
### HTML

```html
<button class="className">Click-me</button>
```
### JS/TS

```javascript
const elements = document.querySelectorAll('.className')
new Ripples(elements);
```

### CSS

```css
HTMLElement {
  position: relative;
  overflow: hidden;
  --rp-color: rgb, rgba, hsl, hsla, hex, hexa...;
  --rp-transition: number;
}
```

## DEMO
### https://franciscojefersondev.github.io/components/components/ripples/finish/demo/