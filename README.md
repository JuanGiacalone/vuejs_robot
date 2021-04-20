# vuejs_robot

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


: is a v-bind replacement

@ is a v-on replacement

use v-once to update only once a div.

use v-if to show data if a boolean is true. (add and removes elements) (if the content is not expensive)

use v-show : adds style to display = "none" if false (if content is expensive)

in data() goes any data that vue needs to update or keep an eye.

v-for = "(x,index)" in data :key="index"

its a for loop to update a list. do not mix with v-if (performance warning)


deep styling a subclass (/deep/ )
.content >>> .robot-name {

}

conditional style classes, headborderStyle is a computed function that returns a CSS line
" <div class="top part" :style="headBorderStyle"> "

conditional CLASS (sale-border IF the HEAD.onSale exists)
" <div class="top part" :class="{'sale-border' : selectedRobot.head.onSale}"> "

conditional class returned from a computed function with top-part as defaults

" <div :class="[saleBorderClass, 'top', 'part']"> "


Instance Lifecycle : lifeclycle diagram (read more)