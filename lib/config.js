// Presentation configuration.
export let revealConfig = {
    controls: true,
    progress: true,
    center: true,
    hash: true,
    slideNumber: true,
    showNotes: true,
    autoPlayMedia: true,

    transition: 'slide',

    dependencies: [
        { src: 'lib/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'lib/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'lib/reveal/plugin/highlight/highlight.js', async: true },
        { src: 'lib/reveal/plugin/search/search.js', async: true },
        { src: 'lib/reveal/plugin/zoom-js/zoom.js', async: true },
        { src: 'lib/reveal/plugin/notes/notes.js', async: true }
    ]
}
