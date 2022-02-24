mini-tutorial.js template: studybook
====================================

Getting Started
---------------

This is a template with the recommended project structure for a `mini-tutorial.js`
document, using the **studybook** stylesheet. Simply download this repository and
change the source files to start a new document.

Use the following commands while working on a document:

 * `npm install` to install all dependencies
 * `npm start` to start development web service on port 8080
 * `npm run build` to build a static version for uploading on a webserver
 * `npm run clean` to just clean the dist directory

The project may contain as many documents as you like. Each one of them is
just a HTML file in the `static` directory. See `static/index.html` for an
example.

Screenshot
----------

And here comes the obligatory screenshot. This layout is actually quite simlar
to `book.css` but with a more professional look and the possibility to make
notes to each section thanks to the `ls-plugin-my-notes` plugin. This layout
is also based on `white.css`.

![Screenshot](screenshot.png)

Notes on index.js
-----------------

Technicaly speaking, each document is a single page app that executes the
JavaScript file `src/index.js`. There the `mini-tutorial.js` main object is
created and its `start()` method is called:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import MiniTutorial from "@dschulmeis/mini-tutorial.js";
import "@dschulmeis/mini-tutorial.js/themes/studybook.css";
// Bug in esbuild-plugin-less and others: Module paths are not recognized!
import "../node_modules/@dschulmeis/mini-tutorial.js/themes/bootstrap.less";

import LS_Plugin_ExtraTags from "@dschulmeis/ls-plugin-extra-tags";
import LS_Plugin_Markdown from "@dschulmeis/ls-plugin-markdown";
import LS_Plugin_MyNotes from "@dschulmeis/ls-plugin-my-notes";

import LS_Plugin_HighlightJS from "@dschulmeis/ls-plugin-highlight.js";
import HLJS_Language_XML from 'highlight.js/lib/languages/xml';
import HLJS_Language_CSS from 'highlight.js/lib/languages/css';
import HLJS_Language_JS from "highlight.js/lib/languages/javascript";
import HLJS_Language_JSON from "highlight.js/lib/languages/json";
import "highlight.js/styles/atom-one-light.css";

import "./icomoon/style.css";
import "./style.less";

window.addEventListener("load", () => {
    let mt = new MiniTutorial({
        tocList: "none",
        download: [
            // Add HTML files here if you want to split the document.
            // The HTML files should only contain <section>-elements without <html>/<head>/<body>
            //
            // "01-intro.html",
            // "02-chapter2.html",
            // ...
        ],
        plugins: [
            new LS_Plugin_MyNotes({
                // placeholder: "My Notes …",
                // printHeading: "Notes",
            }),
            new LS_Plugin_Markdown(),
            new LS_Plugin_ExtraTags({
                quizExerciseHeading: "h3",
            }),
            new LS_Plugin_HighlightJS({
                languages: {
                    html: HLJS_Language_XML,
                    css: HLJS_Language_CSS,
                    javascript: HLJS_Language_JS,
                    json: HLJS_Language_JSON,
                },
                highlightAll: true,
            }),
        ],
    });

    mt.start();
});
```

Here are a few notes to keep in mind when making changes to this file:

 * If Bootstrap is used always import it before `mini-tutorial.js` to
   avoid styling conflicts.

 * After the `mini-tutorial.js` main class always import one of the
   contained stylesheets, if you want to use the pre-defined layouts.

 * If you want to roll your own stylesheet with custom layout, you still
   might want to import `themes/common.css` to remain somewhat compatible
   with the built-in layouts.

 * After the layout stylesheet you might want to import `themes/bootstrap.less`
   if you are using Bootstrap to provide a more modern look. This requires
   a bundler that can transform LESS to CSS code, which is already set up
   in the template.

 * Use the file `src/style.less` for custom styling as you wish.

 * Regarding plugins, the same plugins as for `lecture-slides.js` can be
   used to provide Markdown syntax and custom HTML elements for source code
   syntax highlighting or often-needed Bootstrap elements.

 * When using both plugins, loading `ls-plugin-markdown` before
   `ls-plugin-extra-tags` may help if some &lt;lsx-…&gt; elements inside
   a markdown text are not rendered correctly. If that doesn't help, move
   the &lt;lsx-…&gt; element out of the markdown text.

Other templates
---------------

 * [mt-template-simple](https://www.github.com/DennisSchulmeister/mt-template-simple)
 * [mt-template-roundbox](https://www.github.com/DennisSchulmeister/mt-template-roundbox)
 * [mt-template-book](https://www.github.com/DennisSchulmeister/mt-template-book)
 * [mt-template-studybook](https://www.github.com/DennisSchulmeister/mt-template-studybook) (this one)
 * [mt-template-slideshow](https://www.github.com/DennisSchulmeister/mt-template-slideshow)

Copyright
---------

`mini-tutorial.js` uses the Affero GPL 3. This example however uses a
2-clause BSD license, because you may not want to use the GPL on your documents.

mini-tutorial.js (https://www.github.com/DennisSchulmeister/mini-tutorial.js) <br/>
This template: (https://www.github.com/DennisSchulmeister/mt-template-studybook) <br/>
© 2018 – 2022 Dennis Schulmeister-Zimolong <dennis@pingu-mail.de> <br/>
Licensed under the 2-Clause BSD License.
