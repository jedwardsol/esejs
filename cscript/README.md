# CScript notes


## 1st steps

In the command window type  `notepad first.js`

Notepad will ask if you want to create a new file.  Press yes.

You now have a blank window in which you can write your program.

Write just a single line

    WScript.echo("hello")

Press ctrl-s to save the file.

Back in the command window type

    cscript /nologo first.js


This will start the javascript interpreter and it will run the file you told it to.  It will look like

    C:\> cscript /nologo first.js
    hello



## wscript


The wscript object is provided by cscript and is the way for the script to communicate with rest of the computer

To start,  the most useful method is `wscript.echo`  which writes things to the screen.   


For example,  if you make a new file called second.js and write the script


    for(var i=0;i<10;i++)
    {
        var square = i*i;
        WScript.echo(i , "*", i, "=", square);
    }

And then run it, you'll get


    C:\> cscript /nologo second.js
    0 * 0 = 0
    1 * 1 = 1
    2 * 2 = 4
    3 * 3 = 9
    4 * 4 = 16
    5 * 5 = 25
    6 * 6 = 36
    7 * 7 = 49
    8 * 8 = 64
    9 * 9 = 81

