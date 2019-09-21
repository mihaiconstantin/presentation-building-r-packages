// Decide whether to use .pdf or paper styles for the presentation.
export function injectPrintStyles() {
    const link = document.createElement( 'link' );
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = window.location.search.match( /print-pdf/gi ) ? 'content/presentation/lib/reveal/css/print/pdf.css' : 'content/presentation/lib/reveal/css/print/paper.css';
    document.getElementsByTagName( 'head' )[0].appendChild( link );
}
