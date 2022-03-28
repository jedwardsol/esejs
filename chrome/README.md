# browser notes


## Introduction : HTML

A web browser doesn't run javascript directly.  Instead you will need to create a webpage which contains the javascript.  The script can then do its own thing, or interact with the page.

A web page is written in HTML.  This has a specific structure.  


Use notepad to create a file  `basic.html`  and in it put


    <!DOCTYPE HTML>
    <html>

    <head>
    <title>Most simple page</title>
    </head>

    <body>
    <p>Hello!</p>
    </body>

    </html>



Then in chrome,   enter the path to the file in the address bar.  The window will display the text "Hello!"


HTML is defined by "tags" which are the bits surrounded by angle brackets.   Each tag appears in pairs the start `<tag>` and the end `</tag>`

The 1st line is an exception : this tag tells the browser that what follows is HTML.

Entire document is enclosed within the `<html> ... </html>` tag.

The document then consists of 2 parts.  The head and the body.   The body contains the stuff that will appear in the browser window.   The head contains other things that help describe how to display the page.  The head is where scripts will go.


### Body

A page with a bit more content is

    <!DOCTYPE HTML>
    <html>

    <head>
    <title>Some body tags</title>
    </head>

    <body>
    <p><h1>This is a big heading</h1></p>
    <p>This is a paragraph </b></p>
    <p>This is a paragraph with some <b>bold</b> text in it.</p>
    <p>This is a paragraph with some <i>italic</i> text in it.</p>
    <div id="section1">This is a section. It is like a paragraph.  It has a <q>quotation</q> in it.</div>
    </body>

    </html>



The `<p>` tag defines the paragraphs.

`<h1>`, `<b>`,  `<i>`, and `<q>` tags  define text as a heading,  bold, italic  and a quotation respectively.  There are lots other tags to better describe what the text means.



An opening tag,  some content,  and the closing tag are collectively called an "element".


For interacting with javascript,  we need to give the script a way to identify an element.   This is done with the `id` "attribute".   The opening tag of an element contains the attributes.







