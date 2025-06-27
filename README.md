# seamless-interdomain-transition

A lightweight JavaScript utility that enables visually smooth, customizable transitions (such as fade-outs) before navigating between web domains. Ideal for building immersive web experiences where cross-site navigation feels cohesive and fluid.

---

## Installation

Install using npm:

```bash
npm install seamless-interdomain-transition
```

---

## Usage

```js
import { transitionTo } from 'seamless-interdomain-transition';

// Trigger a fade-out transition, then navigate to the new URL
transitionTo('https://anotherworld.dev', {
  duration: 1200,
  background: '#111',
  onBeforeNavigate: () => {
    console.log('Transitioning...');
  }
});
```

This will create a full-screen overlay, apply a fade-out effect for the specified duration, and then navigate to the target URL.

---

## API Reference

### `transitionTo(url, options)`

Navigates to a new URL after playing a visual transition.

#### Parameters

| Name                      | Type       | Default   | Description                                                 |
|---------------------------|------------|-----------|-------------------------------------------------------------|
| `url`                     | `string`   | —         | Target URL to navigate to. Required.                        |
| `options`                 | `object`   | `{}`      | Configuration options for the transition.                   |
| `options.duration`        | `number`   | `1000`    | Duration of the transition in milliseconds.                |
| `options.background`      | `string`   | `'#000'`  | Background color used during the transition.               |
| `options.onBeforeNavigate`| `function` | `undefined` | Optional callback triggered just before navigation.       |

---

## Example

```html
<!-- HTML -->
<button id="portal-btn">Enter Portal</button>
```

```js
// JavaScript (ES Module)
import { transitionTo } from 'seamless-interdomain-transition';

document.getElementById('portal-btn').addEventListener('click', () => {
  transitionTo('https://example.com', {
    duration: 1000,
    background: '#000',
    onBeforeNavigate: () => console.log('Leaving current world...')
  });
});
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
