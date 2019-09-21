// Presentation configuration.
export let revealConfig = {
    controls: true,
    progress: true,
    center: true,
    hash: true,
    slideNumber: true,
    showNotes: true,
    autoPlayMedia: true,

    // Settings to consider for more flexibility.
    // width: "75%",
    // height: "70%",
    // margin: .1,
    // minScale: 1,
    // maxScale: 1,

    transition: 'slide',

    dependencies: [
        { src: 'content/presentation/lib/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'content/presentation/lib/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'content/presentation/lib/reveal/plugin/highlight/highlight.js', async: true },
        { src: 'content/presentation/lib/reveal/plugin/search/search.js', async: true },
        { src: 'content/presentation/lib/reveal/plugin/zoom-js/zoom.js', async: true },
        { src: 'content/presentation/lib/reveal/plugin/notes/notes.js', async: true },
        { src: 'content/presentation/lib/reveal/plugin/math/math.js', async: true }
    ]
}
