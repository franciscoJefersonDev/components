# RIPPLES EFFECT

> ## "Life to web buttons"

# HOW TO USE

## IMPORT

### JS

```javascript
import Ripples from 'https://cdn.jsdelivr.net/gh/franciscoJeferson/components_ui/components/finish/Ripples.js';
new Ripples(elements);
```

### TS

```typescript
import Ripples from 'https://cdn.jsdelivr.net/gh/franciscoJeferson/components_ui/components/finish/Ripples.ts';
new Ripples(elements);
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
### https://stackblitz.com/github/franciscoJeferson/components_ui/tree/main/components/ripples/finish/demo