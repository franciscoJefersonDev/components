# DROPDOWN

# HOW TO USE

## IMPORT

### JS/TS

```javascript
import Dropdown from 'https://cdn.jsdelivr.net/gh/franciscoJefersonDev/components/components/dropdown/finish/Dropdown.(js||ts)';
```

### CSS/SCSS

```css
import(https://cdn.jsdelivr.net/gh/franciscoJefersonDev/components/components/dropdown/finish/Dropdown.(css||scss)');
```
## CONFIGURATION
### HTML

```html
<div class="dropdown">
  <button class="dropdown__button ripples">
    <ion-icon name="ellipsis-vertical"></ion-icon>
  </button>
  <ul class="dropdown__menu">
    <li>This is dropdown</li>
  </ul>
</div>
```
### JS/TS

```javascript
const dropdowns = document.querySelectorAll('.dropdown')
new Ripples(dropdowns);
```

## DEMO
### https://franciscojefersondev.github.io/components/components/dropdown/finish/dist/