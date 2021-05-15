/**
 *	First argument of the function should be the object to which the function 
 *	should be applied. Second argument should be the function name. The 3rd should 
 *	be the 2nd to nth arguments for the function call. 
 */
function performFunctionOnAllElements(obj, func, args)
{
	// Warning
	if(performFunctionOnAllElements.arguments.length < 2)
	{
		alert("Invalid call on function performFunctionOnAllElements, must have at least to arguments")
	}
	
	// Apply function to object itself first
	func(obj, args)

	// Recursively apply function to children
	if(obj.childNodes.length > 0)
	{
		var objs = obj.childNodes
		var item = 0
		for ( item = 0; item < objs.length; item = item + 1)
		{
			performFunctionOnAllElements.arguments[0] = 
			performFunctionOnAllElements(objs[item], func, args)
		}
	}
}

function showTR(trid)
{
	hideTR('info')
	hideTR('courses')
	hideTR('cv')
	hideTR('notebook')
	hideTR('misc')
	var tr = document.getElementById(trid)
	tr.style.display = 'block'
}

//function showTR(trid)
//{
//	hideTR('info')
//	hideTR('research')
//	hideTR('courses')
//	hideTR('cv')
//	var tr = document.getElementById(trid)
//	tr.style.display = 'block'
//}

function hideTR(trid)
{
	var tr = document.getElementById(trid)
	tr.style.display = 'none'
}



function setVisibility(id) {
                    if (document.getElementById(id).value == '-') {
                        document.getElementById(id).value = '+';
                        document.getElementById(id).style.display = 'none';
                    } else {
                        document.getElementById(id).value = '-';
                        document.getElementById(id).style.display = 'inline';
                    }
                }
            
function writeBanner()
{document.write("<table class='header'><tr border='0'>")
document.write("<td border='0' width='200'><img src='img/me.jpg' border='0'/></td>")
document.write("<td style='text-align: justify; border-style: none;' >")
document.write("<font style='font-weight:500;font-size:22pt'>Jingjin Yu</font><br>")

document.write("<br>Assistant Professor<br>Department of Computer Science, Rutgers University")
document.write("<br>")
document.write("Email: jingjin.yu<img src='img/a.png' border='0' align='top'/>cs.rutgers.edu<br>Office: 307 One Spring St, New Brunswick<br>")

document.write("</td>")
document.write("<td border='0' width='100'><img src='img/arc-s.png' border='0'/></td></tr></table>")

}

function bodyStart()
{document.write("<center>")}

function bodyEnd()
{
document.write("<table class='BodyEndBar'>")
document.write("<tr><td colspan=2 class='SepThickTop'></td></tr>")  
document.write("<tr><td><font style='font-size:10pt;font-weight:600'>&nbsp;</font></td>")
document.write("<td align='right'><font style='font-size:10pt;font-color:#404040;font-weight:600'>&copy; 2017 &nbsp;Jingjin Yu</font></td></tr>")  
document.write("</table>")

document.write("</center>")
}

var itemId = new Array("home", "publication", "courses")
var pageLink = new Array("index.html", "pub.html", "courses.html")
var pageLinkText = new Array("Home", "Publications", "Teaching")

function writeMenu(highLightedItem)
{

document.writeln("<table class='menu'>")
document.writeln("	<tr><td ><p class='menu'>&nbsp;&nbsp;&nbsp;&nbsp;")
for(i in itemId){
    if(itemId[i]== "cv" || itemId[i]== "notebook")
        document.writeln("	<a class='menu' target='_' href='" + pageLink[i] + "'>" + pageLinkText[i] + "</a>&nbsp;&nbsp;&nbsp;&nbsp;")
    else{
		if(itemId[i] == highLightedItem)
			document.writeln("	<a class='menu' href='" + pageLink[i] + "'><font color='white'>" +  pageLinkText[i]  + "</font></a>&nbsp;&nbsp;&nbsp;&nbsp;")
		else
			document.writeln("	<a class='menu' href='" + pageLink[i] + "'>" + pageLinkText[i] + "</a>&nbsp;&nbsp;&nbsp;&nbsp;")
	}
}
document.writeln("	</p></td>")
document.writeln("	</tr>")
document.writeln("</table>")
}

function getLink(name)
{
for(i in itemId){
	if(itemId[i] == name)
		getLink = pageLink[i]
	else
		getLink = pageLink[i]
}
}

function writeSiteMeter(){
document.write("<tr style='display:none;'><td><!-- Site Meter --><script type='text/javascript' src='http://s48.sitemeter.com/js/counter.js?site=s48micro'></script>")
document.write("<noscript><a href='http://s48.sitemeter.com/stats.asp?site=s48micro' target='_top'>")
document.write("<img src='http://s48.sitemeter.com/meter.asp?site=s48micro' alt='Site Meter' border='0'/></a></noscript><!-- Copyright (c)2006 Site Meter --></td></tr>")
}

function writeBigHeader(str)
{
document.write("<font color='MAROON'><big><b>")
document.write(str)
document.write("</b></big></font><br>")
}

function writeHeader(str)
{
document.write("<font color='MAROON' style='padding-bottom:4px;'><b>")
document.write(str)
document.write("</b></font><br>")
}
