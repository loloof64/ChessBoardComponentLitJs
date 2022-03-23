---
layout: page.11ty.cjs
title: <loloof64-chessboard> ⌲ Home
---

# &lt;loloof64-chessboard>

`<loloof64-chessboard>` is a chess board web component. It can handle interactions with the board and game update. But it is not intented to include a game engine. Meanwhile, you can configure a side (or both) to be not human, so that you can update with the move your chess engine has selected.

## As easy as HTML

<section class="columns">
  <div>

`<loloof64-chessboard>` is just an HTML element. You can it anywhere you can use HTML!

```html
<loloof64-chessboard></loloof64-chessboard>
```

  </div>
  <div>

<loloof64-chessboard></loloof64-chessboard>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<loloof64-chessboard>` can be configured with attributed in plain HTML.

```html
<loloof64-chessboard name="HTML"></loloof64-chessboard>
```

  </div>
  <div>

<loloof64-chessboard name="HTML"></loloof64-chessboard>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<loloof64-chessboard>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;loloof64-chessboard&gt;</h2>
    <loloof64-chessboard .name=${name}></loloof64-chessboard>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;loloof64-chessboard&gt;</h2>
<loloof64-chessboard name="lit-html"></loloof64-chessboard>

  </div>
</section>
