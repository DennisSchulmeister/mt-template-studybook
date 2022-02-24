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
