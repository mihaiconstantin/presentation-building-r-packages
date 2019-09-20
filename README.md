# [`vue.js`](https://github.com/vuejs/vue) and [`reveal.js`](https://github.com/hakimel/reveal.js) without build tools

<a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square" alt="License">
</a>

---

Handy minimal setup for using [`reveal.js`](https://github.com/hakimel/reveal.js) and [`vue.js`](https://github.com/vuejs/vue) without any build tools via [`http-vue-loader`](https://github.com/FranckFreiburger/http-vue-loader).

[`Vue`](https://github.com/vuejs/vue) components can be used as slides for [`reveal.js`](https://github.com/hakimel/reveal.js) with scoped styles. 

Main files and folders of interest: 
- [`content/Presentation.vue`](content/presentation/Presentation.vue)
- [`content/presentation/slides`](content/presentation/slides)

**Need to be served via the `http` protocol** (e.g., a simple local web server would do). 

For example, `python -m SimpleHTTPServer -p 8000` and presentation will be up at `http://localhost:8000`.

## License

The code in this repository is licensed under the [MIT license](https://opensource.org/licenses/MIT).
