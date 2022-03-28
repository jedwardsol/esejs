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



### Head - style

The HTML tags describe what the text is.   `<q>This is a quotation</q>`.   How the browser displays a quotation depends on the stylesheet.   The style sheet goes in the head of the document.   It can either be a link to a different file,  or be written out in full.

Written out in full,  it looks like this :-


    <!DOCTYPE HTML>
    <html>

    <head>
    <title>Some styles</title>

    <style>

    b {
    color : red;
    }

    q {
     background-color: lightblue;
    }


    #section1 {
    color : blue;
    }

    .green {
    color : green;
    }

    </style>

    </head>

    <body>
    <p><h1>This is a big heading</h1></p>
    <p>This is a paragraph </b></p>
    <p class="green">This is a green paragraph </b></p>
    <p class="green">This is a another green paragraph </b></p>
    <p class="green">This is a third green paragraph </b></p>
    <p>This is a paragraph with some <b>bold</b> text in it.</p>
    <p>This is a paragraph with some <i>italic</i> text in it.</p>
    <div id="section1">This is a section. It is like a paragraph.  It has a <q>quotation</q> in it.</div>
    </body>

    </html>


The stylesheet goes inside a `<style>` element.   It has its own language.   Before the `{`  is the name of the thing that the style applies to.   This can be a tag,  a class,  or a specific element.


### Head script


Simple example

    <!DOCTYPE HTML>
    <html>

    <head>
    <title>Simple script</title>

    <script>

    function pageLoaded() {
        document.getElementById("section1").innerHTML = "This was written by the script";
    }

    </script>


    </head>

    <body onload="pageLoaded()"  >
    <div id="section1"></div>
    </body>

    </html>


There's a lot going on here.

1:  There needs to be something that tells the script when to run.  There are lots of different events available.  Here 

    <body onload="pageLoaded()"  >

we've said that when the body has finished loaded then the function `pageLoaded` should be executed.

2:  The script itself sits inside a `<script>` element in the head of the document.  This script consists of a single function.


3:  The browser makes available an object called `document` which gives access to the page.

The `getElementById` method lets us get access to the `div` that we assigned an id to.

And then each element has a property called `innerHTML`.

    <div id="section1"> This area is where the innerHTML is </div>



A more interactive example that ties together HTML and styles and javascript

    <!DOCTYPE HTML>
    <html>

    <head>
    <title>Interactive script</title>

    <script>

    function highlight() {
        document.getElementById("section1").style.background = `green`;
    }

    function makeNormal() {
        document.getElementById("section1").style.background = `white`;
    }

    </script>


    </head>

    <body  >
    <div id="section1"  onMouseEnter="highlight()"  onMouseLeave="makeNormal()" >  Hello! </div>
    </body>

    </html>


Here we told the div to run one function when the mouse "enters" the element and another when the mouse leaves it.

