# javascript



This describes 3 ways of running Javascript programs.


# 0 managing and editing files


## Windows

Press Windows-R  to get the "Run" dialog.

Type  `cmd`  and press OK.  This will give you a command window where you will be managing files.

TODO : directories and organisation



## Chromebook

TODO



# 1a  Windows cscript


Windows has a basic javascript environment built it.



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




#1b Chromebook?

TODO : does it have anything similar.