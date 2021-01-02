# `setIdleTimeout`

This function works as a normal [`setTimeout`][settimeout_docs], but the timeout gets reset when the returned function is called.
Once the timeout occurs, uninterrupted by the returned function, the callback will finally be invoked.

```js
const setIdleTimeout = (...args) => {
  let timeoutId = setTimeout(...args);
  const alertUserAction = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(...args);
  };
  return alertUserAction;
};
```

## Example

> 💡 Check out [`example.html`][example] for a complete example.

```js
let start = Date.now();
const delay = 5e3;
const callThisFunctionWhenUserClicksTheButton = setIdleTimeout(
  alert,
  delay,
  "Timer is up!"
);
const btn = document.createElement("button");
document.body.appendChild(btn);
const animate = () => {
  const timeRemaining = ((delay - (Date.now() - start)) / 1000).toFixed(2);
  btn.textContent = `Click to reset timer (${timeRemaining}s remaining)`;
  requestAnimationFrame(animate);
};
btn.addEventListener("click", () => {
  start = Date.now();
  callThisFunctionWhenUserClicksTheButton();
});
animate();
```

[settimeout_docs]: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
[example]: example.html
