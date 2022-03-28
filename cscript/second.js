WScript.echo("<echo>")
WScript.stdOut.write("<write>");
WScript.stdOut.writeline("<writeline>");


// ---

WScript.echo("2+2 = ", 2+2)


var answer = 6*7


WScript.echo("answer = ", answer)



for(var i=0;i<10;i++)
{
    var square = i*i;
    WScript.echo(' ${i} * ${i} = ${square}');
}
